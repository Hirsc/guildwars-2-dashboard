#!/usr/bin/env bash
#
# Description:
#   Creates a proxy for a service running with local yarn (without docker)
#
# Usage:
#   ./make-service-proxy.sh <service-name>
#
# Examples:
#   ./make-service-proxy.sh web-main
#
#

# Params
service=$1
port=$2

# Setup
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null && pwd)"

# Script
$DIR/create-docker-network.sh &&\

DEV_PROXY_IMAGE_CONTAINER_ID=$(docker ps -qf ancestor=$service | grep -E "[0-9a-fA-F]")
EXIT_CODE=$?
if [ $EXIT_CODE -eq 0 ]; then
    echo "Stopping dev-proxy container..."
    docker stop $DEV_PROXY_IMAGE_CONTAINER_ID
fi

# Remove if Service container running with 'make run-docker'
docker-compose rm -fsv $service-run

# Start service proxy container
echo "Creating $service proxy container..."
docker-compose up -d $service-proxy

# Start local server and stop service proxy on ctrl+c interrupt
ctrlc_count=0
function ctrlc_event() {
    let ctrlc_count++
    if [[ $ctrlc_count == 1 ]]; then
        echo "Removing $service proxy container..."
        docker-compose rm -fsv $service-proxy
        lsof -i :$port -sTCP:LISTEN | awk 'NR > 1 {print $2}' | xargs kill -SIGINT
        exit 0
    fi
}

trap ctrlc_event SIGINT

echo "Starting $service local server..."
make _run
