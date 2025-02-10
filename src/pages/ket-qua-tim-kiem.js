import dynamic from "next/dynamic";
import React from "react";

const QuestionPageView = dynamic(
  () => import("@/components/QuestionPageView/QuestionPageView"),
  { ssr: false }
);

const QuestionPage = () => {
  return <QuestionPageView />;
};

export default QuestionPage;
