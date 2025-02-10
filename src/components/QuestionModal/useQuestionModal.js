import Services from "@/services";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const useQuestionModal = () => {
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [question, setQuestion] = useState({});
  const searchParams = useSearchParams();

  const questionId = searchParams.get("questionId");

  const toggleShowQuestionModal = () => {
    setShowQuestionModal((prev) => !prev);
  };

  useEffect(() => {
    if (questionId) {
      const fetchQuestionData = async () => {
        const { data } = await Services.bookService.getQuestion(questionId);
        setQuestion(data.data);
      };
      fetchQuestionData();
    }
  }, [questionId]);
  return { toggleShowQuestionModal, showQuestionModal, question };
};

export default useQuestionModal;
