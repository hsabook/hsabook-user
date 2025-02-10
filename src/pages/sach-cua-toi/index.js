import React from "react";
import ActiveBookView from "@/components/ActiveBook/ActiveBookView";
import { Toaster } from "react-hot-toast";

function ActiveBookPage(props) {
  return (
    <>
      <ActiveBookView />
      <Toaster />
    </>
  );
}

export default ActiveBookPage;
