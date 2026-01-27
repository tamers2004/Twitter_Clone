
const memoryCache = {};
const MAX_ITEMS_CACHE = 300;


export const getFromCache = async (key, callback, ttl = 10_000) => {

    if (memoryCache[key] && Date.now() - memoryCache[key].createdAt < ttl) {
        memoryCache[key].lastUsed = Date.now();
        return memoryCache[key].result;
    }

    const result = await callback();

    if (Object.keys(memoryCache).length >= MAX_ITEMS_CACHE) {
        const oldestKey = Object.keys(memoryCache).sort((a, b) => memoryCache[a].lastUsed - memoryCache[b].lastUsed)[0];
        delete memoryCache[oldestKey];
    }

    memoryCache[key] = {
        result,
        lastUsed: Date.now(),
        createdAt: Date.now()
    };

    return result;
}

export * as CacheService from "./cache.service.js";
