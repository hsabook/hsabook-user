import Services from "@/services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter()

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSignUp = async (signUpData) => {
    try {
      const { data } = await Services.authService.signup({
        username: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
        phone_number: "",
        avatar: "",
        full_name: "",
      });
      toast.success("Đăng ký thành công!");
      setTimeout(() => router.push("/dang-nhap"), 1000)
    } catch (err) {
      console.warn(err.response?.data?.message);
      toast.error("Đăng ký thất bại: " + err.response?.data?.message);
    }
  };
  return {
    showPassword,
    showConfirmPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleSignUp,
  };
};

export default useSignUp;
