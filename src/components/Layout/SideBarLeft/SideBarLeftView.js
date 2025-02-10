import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import React from "react";

const SideBarLeftView = () => {
  const { userInfo } = useUserInfo();
  const { logout } = useUserInfo();
  const router = useRouter();
  return (
    <div class="max-w-xs min-w-[250px] mx-auto p-6 overflow-y-hidden">
      <div class="space-y-4 h-screen flex flex-col">
        <div
          class="flex items-center text-green-700 cursor-pointer "
          onClick={() => router.push("/tai-khoan")}
        >
          <i class="far fa-user text-xl w-8"></i>
          <span>Thông tin cá nhân</span>
        </div>
        <div class="border-b border-gray-300"></div>
        <div class="flex items-center text-green-700 cursor-pointer ">
          <i class="far fa-edit text-xl w-8"></i>
          <span>Đề thi</span>
        </div>
        <div class="flex items-center text-green-700 cursor-pointer ">
          <i class="far fa-comments text-xl w-8"></i>
          <span>Hỏi đáp</span>
        </div>
        <div
          class="flex items-center text-green-700 cursor-pointer "
          onClick={() => router.push("/sach-cua-toi")}
        >
          <i class="fas fa-book text-xl w-8"></i>
          <span>Sách đã kích hoạt</span>
        </div>
        <div class="flex items-center text-green-700 cursor-pointer ">
          <i class="far fa-file-alt text-xl w-8"></i>
          <span>Tài liệu</span>
        </div>
        <div class="flex items-center text-green-700 cursor-pointer ">
          <i class="fas fa-search text-xl w-8"></i>
          <span>Tra số báo danh</span>
        </div>
        <div class="border-b border-gray-300"></div>
        <div class="space-y-4">
          <h2 class="text-green-700 text-xl mb-4">Liên kết</h2>
          <div class="flex items-center text-green-700 cursor-pointer ">
            <span class="bg-blue-600 p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1">
              <i class="fab fa-facebook-f text-white"></i>
            </span>
            <span>Page Hsa Education</span>
          </div>
          <div class="flex items-center text-green-700 cursor-pointer ">
            <span class="bg-red-600 p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1">
              <i class="fab fa-youtube text-white"></i>
            </span>
            <span>Youtube ôn thi đánh giá năng lực đánh giá tư duy</span>
          </div>
          <div class="flex items-center text-green-700 cursor-pointer ">
            <span class="bg-black p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1">
              <i class="fab fa-tiktok text-white"></i>
            </span>
            <span>Tiktok hsa official</span>
          </div>
          <div class="flex items-center text-green-700 cursor-pointer ">
            <span class="bg-blue-600 p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1">
              <i class="fab fa-facebook-f text-white"></i>
            </span>
            <span>Thầy Văn Hoa Hsa</span>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mt-6 md:hidden">
          {Object.keys(userInfo).length > 0 && (
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md font-medium mt-6 w-full"
              onClick={logout}
            >
              Đăng xuất
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarLeftView;
