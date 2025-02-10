import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";
import axios from "axios";

class UserService {
  getInfo() {
    return api.request({
      method: "GET",
      url: "/users/info",
    });
  }

  uploadMedia(url, file) {
    const formData = new FormData();
    formData.append("file", file);
    const accessToken = window.localStorage.getItem("access_token");

    return axios.post(`${process.env.NEXT_PUBLIC_API_URL_PUBLIC}${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  updateUserInfo(data) {
    return api.request({
      method: "PUT",
      url: "/users",
      data,
    });
  }
}

const userService = new UserService();

export default userService;
