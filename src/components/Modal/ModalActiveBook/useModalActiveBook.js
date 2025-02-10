import Services from "@/services";
import React, { useState } from "react";
import toast from "react-hot-toast";

const useModalActiveBook = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const onSubmit = ({ bookId, codeId }) => {
    setIsSubmitting(true);
    Services.bookService
      .activeBook(bookId, codeId)
      .then(() => {
        setIsSubmitting(false);
        toast.success("Kích hoạt sách thành công");
        setOpen(false)
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error(err);
        toast.error("Lỗi khi kích hoạt sách, vui lòng thử lại sau")
      });
  };
  return { onSubmit, isSubmitting, onOpenModal, onCloseModal, open };
};

export default useModalActiveBook;
