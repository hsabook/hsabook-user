import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";

class BlockService {
    getConfigData(key, isServerSide = false) {
        return api.request({
            method: "GET",
            url: `/config-data/${key}`,
            baseURL: isServerSide? API_URL : API_URL_PUBLIC,
        })
    }
}

const blockService = new BlockService();

export default blockService;
