import React from "react";
import { useForm } from "react-hook-form";
import useSignUp from "./useSignUp";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpView = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    showPassword,
    showConfirmPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleSignUp,
  } = useSignUp();
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center min-h-screen">
        <div className="bg-white p-6 max-w-md mx-auto rounded-lg shadow-lg w-full">
          <h1 className="text-3xl font-bold mb-8">Đăng ký</h1>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
            {/* Username */}
            <div className="space-y-1">
              <label className="block">
                <span className="text-gray-700">
                  <span className="text-red-500">*</span> Username
                </span>
                <input
                  type="text"
                  placeholder="Nhập username"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white border focus:outline-none focus:border-blue-500"
                  {...register("username", {
                    required: "Username không được bỏ trống",
                  })}
                />
              </label>
              {errors.username && (
                <span className="text-red-500 text-sm">
                  {errors.username.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block">
                <span className="text-gray-700">
                  <span className="text-red-500">*</span> Email
                </span>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white border focus:outline-none focus:border-blue-500"
                  {...register("email", {
                    required: "Email không được bỏ trống",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email sai định dạng",
                    },
                  })}
                />
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1 relative">
              <label className="block">
                <span className="text-gray-700">
                  <span className="text-red-500">*</span> Mật khẩu
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white border focus:outline-none focus:border-blue-500"
                  {...register("password", {
                    required: "Mật khẩu không được bỏ trống",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải có ít nhất 6 kí tự",
                    },
                  })}
                />
              </label>
              <i
                className={`fas ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } absolute right-3 bottom-3 text-gray-400 cursor-pointer`}
                onClick={toggleShowPassword}
              ></i>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1 relative">
              <label className="block">
                <span className="text-gray-700">
                  <span className="text-red-500">*</span> Xác nhận mật khẩu
                </span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Xác nhận mật khẩu"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white border focus:outline-none focus:border-blue-500"
                  {...register("confirmPassword", {
                    required: "Vui lòng xác thực mật khẩu",
                    validate: (value) =>
                      value === watch("password") || "Mật khẩu không khớp",
                  })}
                />
              </label>
              <i
                className={`fas ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                } absolute right-3 bottom-3 text-gray-400 cursor-pointer`}
                onClick={toggleShowConfirmPassword}
              ></i>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2"
                {...register("terms", {
                  required: "Vui lòng chấp thuận điều khoản sử dụng",
                })}
              />
              <span className="text-sm text-gray-700">
                Tôi đồng ý với &quot;
                <a href="#" className="underline">
                  Điều khoản Dịch vụ
                </a>{" "}
                và
                <a href="#" className="underline">
                  Chính sách Bảo mật
                </a>
                &quot;
              </span>
            </div>
            {errors.terms && (
              <span className="text-red-500 text-sm">
                {errors.terms.message}
              </span>
            )}

            {/* Submit Button */}
            <button
              htmlType="submit"
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Đăng ký
            </button>

            {/* Redirect to Sign In */}
            <p className="text-center text-gray-700 mt-4">
              Bạn đã có tài khoản?
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => router.push("/dang-nhap")}
              >
                Đăng nhập
              </span>
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default SignUpView;
