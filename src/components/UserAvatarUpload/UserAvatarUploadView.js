import Image from "next/image";
import React from "react";
import useUserAvatarUpload from "./useUserAvatarUpload";

const UserAvatarUploadView = ({ avatar, onChange, disabled }) => {
  const { url, handleChange } = useUserAvatarUpload(avatar, onChange);

  return (
    <div className="bg-gray-100 border relative border-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4 cursor-pointer overflow-hidden">
      {url && <Image layout="fill" src={url} alt="user avatar" />}

      <label
        htmlFor="avatarUpload"
        className="flex flex-col items-center justify-center w-full h-full text-gray-500 cursor-pointer absolute z-10 top-0 left-0"
      >
        <input
          id="avatarUpload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
          disabled={disabled}
        />
        {!url && <span>Thay đổi ảnh đại diện</span>}
      </label>
    </div>
  );
};

export default UserAvatarUploadView;
