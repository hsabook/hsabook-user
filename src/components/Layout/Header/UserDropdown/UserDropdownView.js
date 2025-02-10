import Services from "@/services";
import { useRouter } from "next/navigation";
import React from "react";

const UserDropdownView = ({logout}) => {
  const router = useRouter();
  return (
    <div className="overflow-hidden shadow-sm rounded-md bg-white absolute bottom-0 flex flex-col translate-y-full right-0 translate-x-3 z-10">
      <div
        className="cursor-pointer whitespace-nowrap px-4 py-1 flex justify-between items-center gap-3 hover:bg-gray-200 bg-gray-100"
        onClick={() => router.push("/tai-khoan")}
      >
        Thông tin tài khoản
        <i class="fa-regular fa-user"></i>
      </div>
      <div
        className="cursor-pointer px-4 py-1 flex justify-between items-center gap-3 hover:bg-gray-200 bg-gray-100"
        onClick={logout}
      >
        Đăng xuất
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default UserDropdownView;
