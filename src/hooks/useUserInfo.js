import React, { useEffect } from "react";
import { useSnapshot } from "valtio/react";
import Stores from "@/stores";
import { usePathname, useRouter } from "next/navigation";

const useUserInfo = () => {
  const { userInfo, updateUserInfo, logout } = useSnapshot(Stores.userStore);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      Stores.userStore
        .getUserInfo(
          () => {},
          () => {
            const token = window.localStorage.getItem("access_token");
            if (token) {
              if (pathName === "/") {
                return { userInfo: undefined };
              }
              router.push("/dang-nhap");
            }
          }
        )
        .catch(console.log);
    }
  }, []);
  return {
    userInfo,
    updateUserInfo,
    logout
  };
};

export default useUserInfo;
