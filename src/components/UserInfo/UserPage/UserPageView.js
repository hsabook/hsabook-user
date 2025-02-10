import UserAvatarUploadView from "@/components/UserAvatarUpload/UserAvatarUploadView";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import React from "react";
import { Controller } from "react-hook-form";

const UserPageView = ({
  editMode,
  toggleEditMode,
  register,
  handleSubmit,
  formState: { errors },
  setValue,
  userInfo,
  control,
  handleSubmitEdit,
}) => {

  return (
    <form onSubmit={handleSubmit(handleSubmitEdit)} className="bg-gray-100">
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Sidebar */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/4 mb-6 lg:mb-0">
            <div className="flex flex-col items-center">
              <div className="rounded-full w-24 h-24 flex items-center justify-center text-2xl font-bold text-gray-500 overflow-hidden relative">
                <Image layout="fill" src={userInfo?.avatar} alt="User avatar" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-center">
                {userInfo?.full_name}
              </h2>
              <p className="text-gray-500 text-center">
                Tham gia từ: 10/12/2024
              </p>
            </div>
            <div className="mt-6">
              <ul>
                <li className="flex items-center text-green-600 font-semibold mb-4">
                  <i className="fas fa-user mr-2"></i>
                  Thông tin cá nhân
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-3/4">
            <div className="flex w-full justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-green-600">
                Thông tin cá nhân
              </h2>
              <button
                type="button"
                className={`${editMode ? "text-green-600" : "text-black"}`}
                onClick={toggleEditMode}
              >
                <i className="fa-solid fa-user-pen"></i>
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Avatar */}
              <div>
                <Controller
                  control={control}
                  name="avatar"
                  render={({ field }) => (
                    <UserAvatarUploadView
                      avatar={field.value}
                      onChange={field.onChange}
                      disabled={!editMode}
                    />
                  )}
                />
                <p className="text-gray-600">
                  Mã số học viên:{" "}
                  <span className="text-green-600 font-semibold">104726</span>
                </p>
                <button
                  type="button"
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg w-full"
                >
                  Đổi mật khẩu
                </button>
              </div>

              {/* Editable Fields */}
              <div className="lg:col-span-2">
                {/* Username */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Họ tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("full_name", { required: true })}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:border-green-500"
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">
                      Họ tên là bắt buộc.
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Tài khoản <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("username", { required: true })}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:border-green-500"
                  />
                  {errors.username && (
                    <span className="text-red-500 text-sm">
                      Tài khoản là bắt buộc.
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg p-2 !focus:border-green-500"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Email không hợp lệ.
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone_number", { required: true })}
                    disabled={!editMode}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:border-green-500"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      Số điện thoại là bắt buộc.
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                {editMode && (
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded-lg w-full"
                  >
                    Lưu
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserPageView;
