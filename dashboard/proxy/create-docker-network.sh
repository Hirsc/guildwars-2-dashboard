#
# Description:
#   Create docker network for local development
#   Do nothing if already exists
#
# Usage:
#   ./create-docker-network.sh
#
#

docker network ls | grep proxy_gw2dashboard

if [ $? -eq 1 ]; then
    docker network create proxy_gw2dashboard
fi;
