import React from "react";
import { useForm } from "react-hook-form";
import useSignIn from "./useSignIn";
import { useRouter } from "next/navigation";

const SignInView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { showPassword, toggleShowPassword, handleLogin, error, setError } =
    useSignIn();
  const router = useRouter();

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Đăng nhập</h1>
          <div
            className="text-gray-700 flex items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Trang chủ
          </div>
        </div>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Email/Tên tài khoản
            </label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                {...register("username", {
                  required: "Email hoặc tên tài khoản không được bỏ trống",
                })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mật khẩu</label>
            <div className="relative">
              <i className="fas fa-key absolute left-3 top-3 text-gray-400"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                {...register("password", {
                  required: "Mật khẩu không được bỏ trống",
                })}
                onChange={() => setError("")}
              />
              <i
                className={`fas ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                } absolute right-3 top-3 text-gray-400 cursor-pointer`}
                onClick={toggleShowPassword}
              ></i>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            {error && (
              <span className="text-red-500 text-sm my-2">{error}</span>
            )}
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-blue-500 hover:underline">
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Đăng nhập
          </button>

          <div className="text-center mt-6">
            <span className="text-gray-600">Bạn chưa có tài khoản? </span>
            <div
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => router.push("/dang-ky")}
            >
              Đăng ký ngay
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInView;
