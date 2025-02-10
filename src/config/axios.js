import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_URL_PUBLIC = process.env.NEXT_PUBLIC_API_URL_PUBLIC;

const requestHandler = {
    onFulfilled(config) {
        let jwt = null;
        if (typeof window !== "undefined") {
            jwt = window.localStorage.getItem("access_token");
        }
        if (jwt) {
            config.headers.Authorization = `Bearer ${jwt}`;
        }
        return config;
    },
};

const responseHandler = {
    onFulfilled(response) {
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText
        };
    },

    onRejected(error) {
        if (error.response) {
            const data = error.response.data;
            if (error.response.status === 401) {
                // walletStore.handleResetGmWallet()
            }
            error.response.statusText = data["errorMsg"] || data["errorCode"];
            error.response.data = {
                message: data?.message,
            };
        } else {
            error.response = {
                statusText: "Network Error",
                data: {
                    message: "Network Error",
                },
            };
        }
        return Promise.reject(error);
    },
};

export const api = axios.create({
    baseURL: API_URL_PUBLIC,
    timeout: 30000,
    headers: {},
});

api.interceptors.request.use(requestHandler.onFulfilled);
api.interceptors.response.use(
    responseHandler.onFulfilled,
    responseHandler.onRejected,
);
