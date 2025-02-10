import dynamic from "next/dynamic";
import React from "react";
import { Toaster } from "react-hot-toast";

const DetaiBookView = dynamic(
  () => import("@/components/DetailBook/DetailBookView"),
  { ssr: false }
);

const DetaiBookPage = () => {
  return (
    <>
      <DetaiBookView />
      <Toaster />
    </>
  );
};

export default DetaiBookPage;
