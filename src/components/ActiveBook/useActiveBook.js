import Services from "@/services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useActiveBook = () => {
  const [activeBooks, setActiveBooks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/dang-nhap");
      return;
    }

    Services.bookService
      .getActiveBooks()
      .then((books) => {
        setActiveBooks(books.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { activeBooks };
};

export default useActiveBook;
