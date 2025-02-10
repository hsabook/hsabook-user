import dynamic from "next/dynamic";
import React from "react";
import { Toaster } from "react-hot-toast";
const SectionView = dynamic(() => import("@/components/Section/SectionView"), {
  ssr: false,
});

const SectionPage = () => {
  return (
    <>
      <SectionView />
      <Toaster />
    </>
  );
};

export default SectionPage;
