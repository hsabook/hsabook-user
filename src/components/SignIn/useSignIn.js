import { useEffect, useState } from "react";
import Services from "@/services";
import { useRouter } from "next/navigation";

const useSignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/");
    }
  }, [router]);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async ({ username, password }) => {
    Services.authService
      .login({ username, password })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          window.localStorage.setItem(
            "access_token",
            res?.data?.data?.accessToken
          );
          router.push("/");
        }
      })
      .catch((err) => {
        setError("Đăng nhập thất bại, kiểm tra lại email và mật khẩu");
        console.log(err);
      });
  };
  return { showPassword, toggleShowPassword, handleLogin, error, setError };
};

export default useSignIn;
