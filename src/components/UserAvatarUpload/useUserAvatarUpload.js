import Services from "@/services";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useUserAvatarUpload = (avatar, onChange) => {
  const [url, setUrl] = useState(avatar);

  useEffect(() => {
    setUrl(avatar);
  }, [avatar]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      try {
        const response = await Services.userService.uploadMedia(
          "/media/upload",
          file
        );
        setUrl(response.data?.data?.url);
        onChange(response.data?.data?.url);
        toast.success("Tải ảnh thành công!");
      } catch (error) {
        console.warn(error);
        toast.error(
          "Tải ảnh không thàh công: " + error?.response?.data?.message
        );
      }
    }
  };
  return { url, handleChange };
};

export default useUserAvatarUpload;
