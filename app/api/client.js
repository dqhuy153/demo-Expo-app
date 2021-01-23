import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
    baseURL: "http://127.0.0.1:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    //if can connect to server, save the item from server to cache
    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    //if can't connect to server, get the item from cache
    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
};

export default apiClient;
