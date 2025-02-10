import { proxy } from "valtio";
import Services from "@/services";

const userStore = proxy({
  userInfo: {},

  async getUserInfo(callbackSuccess, callbackError) {
    try {
      const response = await Services.userService.getInfo();
      console.log(response);

      userStore.userInfo = {
        ...response?.data?.data,
      };

      if (typeof callbackSuccess === "function") {
        callbackSuccess(response);
      }
    } catch (error) {
      console.warn("Failed to fetch user info:", error);

      this.userInfo = {};

      if (typeof callbackError === "function") {
        callbackError(error);
      }
    }
  },

  async updateUserInfo(data) {
    try {
      const response = await Services.userService.updateUserInfo(data);
      console.log(response);

      userStore.userInfo = {
        ...this.userInfo,
        ...data,
      };
    } catch (error) {
      console.warn("Failed to update user info:", error);
    }
  },

  logout() {
    try {
      Services.authService.logOut();
      userStore.userInfo = {};
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
});

export default userStore;
