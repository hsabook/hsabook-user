import React from "react";

const Empty = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[50px] h-[50px]">
        <img
          src="/images/empty.png"
          alt="empty"
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};

export default Empty;
