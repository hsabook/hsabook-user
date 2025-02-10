import useUserInfo from "@/hooks/useUserInfo";
import Services from "@/services";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useUserInfoPage = () => {
  const [editMode, setEditMode] = useState(false);
  const { userInfo, updateUserInfo } = useUserInfo();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    control,
  } = useForm();

  useEffect(() => {
    if (Object.keys(userInfo).length == 0) {
      router.push("/dang-nhap");
      return;
    }
    if (userInfo) {
      reset({
        avatar: userInfo.avatar || "",
        full_name: userInfo.full_name || "",
        username: userInfo.username || "",
        email: userInfo.email || "",
        phone_number: userInfo.phone_number || "-",
      });
    }
  }, [userInfo, reset]);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleSubmitEdit = async (data) => {
    try {
      const res = await updateUserInfo({ ...data });
      toast.success("Cập nhật thông tin thành công!");
      toggleEditMode();
    } catch (error) {
      console.warn(error);
      toast.error("Cập nhật thông tin thất bại!");
    }
  };

  return {
    editMode,
    toggleEditMode,
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    userInfo,
    handleSubmitEdit,
  };
};

export default useUserInfoPage;
