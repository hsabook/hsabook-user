import UserInfoView from "@/components/UserInfo/UserInfoView";
import React from "react";
import { Toaster } from "react-hot-toast";

const Index = () => {
  return (
    <>
      <UserInfoView />
      <Toaster />
    </>
  );
};

export default Index;
