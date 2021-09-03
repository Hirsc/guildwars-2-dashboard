
let host = 'https://api.guildwars2.com/';
let apiBase = 'v2';
let apiKey = 'D570A100-5423-C84B-B8FE-BFBFB36BCA24CBDC2EFC-8C6E-4B81-BA0A-2AE6E8DABA38';

export default {
    getApiBase() {
        return apiBase;
    },
    setApiBase(base: string) {
        apiBase = base;
    },
    getApiKey() {
        return apiKey;
    },
    setApiKey(key: string) {
        apiKey = key;
    },
    async useFetch(url: string, r: RequestInit = {}, h?: HeadersInit) {
        const headers = new Headers(h);
        headers.append('Authorization', `Bearer ${apiKey}`)
        headers.append('origin', window.origin)

        return await fetch(
            `${apiBase}/${url}`,
            { 
                ...r,
                headers: headers,
                mode: "cors",
            }
        )
    }
}
