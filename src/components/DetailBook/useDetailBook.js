import Services from "@/services";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const { useState, useEffect } = require("react");

const useDetailBook = () => {
  const [sections, setSections] = useState([]);
  const [book, setBook] = useState({});
  const router = useRouter();
  const { id } = useParams();

  const computeBookData = async () => {
    try {
      const {
        data: { data },
      } = await Services.bookService.getDetailBook(id);
      const authorNames =
        data.authors?.map((author) => author?.user?.full_name).join(", ") ||
        "HSA Education";
      const bookTags =
        data.book_tags?.map((tag) => tag?.tag?.name).join(", ") || "Other";

      setBook({
        ...data,
        author: authorNames,
        tag: bookTags,
      });
    } catch (error) {
      toast.error("Lỗi tải sách!");
      console.error(error);
    }
  };

  const getMenuBook = async () => {
    try {
      const {
        data: {
          data: { data },
        },
      } = await Services.bookService.getMenuBook(id);
      setSections(data);
    } catch (error) {}
  };

  useEffect(() => {
    computeBookData();
    getMenuBook();
  }, []);

  const onClickSection = (sectionId) => {
    if (id) {
      router.push(`/sach-cua-toi/${id}/section?type=DE&sectionId=${sectionId}`);
    }
  };

  return {
    sections,
    book,
    onClickSection,
  };
};

export default useDetailBook;
