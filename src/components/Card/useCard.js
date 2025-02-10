import Services from "@/services";
import { usePagination } from "@/hooks/usePagination";
import { useEffect, useState } from "react";

export const CARD_TYPE = {
  BOOK: "BOOK",
  COURSE: "COURSE",
  EXAM: "EXAM",
  FEEDBACK: "FEEDBACK",
};

const fakeData = {
  [CARD_TYPE.BOOK]: [
    {
      id: 1,
      title: "Cẩm nang ôn thi HSA 2024",
      type: CARD_TYPE.BOOK,
      content: "Tài liệu giúp bạn ôn thi hiệu quả.",
      image: null,
      discard: "20%",
    },
    {
      id: 2,
      title: "Sách Đánh giá năng lực toàn diện",
      type: CARD_TYPE.BOOK,
      content: "Phân tích chi tiết các dạng câu hỏi.",
      image: null,
      discard: "17%",
    },
    {
      id: 3,
      title: "Hành trình ôn thi TSA-BKHN",
      type: CARD_TYPE.BOOK,
      content: "Phương pháp tư duy logic và chiến lược làm bài.",
      image: null,
      discard: "15%",
    },
  ],
  [CARD_TYPE.COURSE]: [
    {
      id: 1,
      title: "Khoá học ôn thi đánh giá năng lực",
      type: CARD_TYPE.COURSE,
      content: "Khóa học trực tuyến từ chuyên gia.",
      image: null,
    },
    {
      id: 2,
      title: "HSA - Khoá học cấp tốc",
      type: CARD_TYPE.COURSE,
      content: "Chương trình cấp tốc chỉ trong 4 tuần.",
      image: null,
    },
    {
      id: 3,
      title: "Khoá học tư duy logic",
      type: CARD_TYPE.COURSE,
      content: "Phát triển kỹ năng tư duy để đạt điểm cao.",
      image: null,
    },
    {
      id: 4,
      title: "Khoá học ôn thi đánh giá năng lực",
      type: CARD_TYPE.COURSE,
      content: "Khóa học trực tuyến từ chuyên gia.",
      image: null,
    },
    {
      id: 5,
      title: "HSA - Khoá học cấp tốc",
      type: CARD_TYPE.COURSE,
      content: "Chương trình cấp tốc chỉ trong 4 tuần.",
      image: null,
    },
    {
      id: 6,
      title: "Khoá học tư duy logic",
      type: CARD_TYPE.COURSE,
      content: "Phát triển kỹ năng tư duy để đạt điểm cao.",
      image: null,
    },
  ],
  [CARD_TYPE.EXAM]: [
    {
      id: 3,
      title: "Thi thử đánh giá năng lực HSA",
      type: CARD_TYPE.EXAM,
      content: "",
      image: null,
    },
    {
      id: 4,
      title: "Thi thử Đánh giá tư duy TSA-BKHN",
      type: CARD_TYPE.EXAM,
      content: "",
      image: null,
    },
    {
      id: 1,
      title: "Thi thử đánh giá năng lực HSA",
      type: CARD_TYPE.EXAM,
      content: "",
      image: null,
    },
    {
      id: 2,
      title: "Thi thử Đánh giá tư duy TSA-BKHN",
      type: CARD_TYPE.EXAM,
      content: "",
      image: null,
    },
    {
      id: 5,
      title: "Thi thử đánh giá năng lực HSA",
      type: CARD_TYPE.EXAM,
      content: "",
      image: null,
    },
    {
      id: 6,
      title: "Thi thử Đánh giá tư duy TSA-BKHN",
      type: CARD_TYPE.EXAM,
      content: "",
      image: null,
    },
    // ... Dữ liệu đã có ở trên
  ],
};

export const CardListTitle = {
  [CARD_TYPE.BOOK]: "Sách mới nhất",
  [CARD_TYPE.EXAM]: "Thi thử đánh giá năng lực- đánh giá tư duy",
};

const useCard = (type) => {
  const [cardList, setCardList] = useState([]);

  function getItemsPerPage() {
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  }

  useEffect(() => {
    const getData = async () => {
      switch (type) {
        case CARD_TYPE.BOOK:
          const {
            data: {
              data: { data },
            },
          } = await Services.bookService.getNewBook();
          const books = data.map((book) => {
            const authorNames =
              book.authors
                ?.map((author) => author?.user?.full_name)
                .join(", ") || "HSA Education";
            const bookTags =
              book.book_tags?.map((tag) => tag?.tag?.name).join(", ") ||
              "Other";

            return {
              ...book,
              authors: authorNames,
              book_tags: bookTags,
            };
          });
          setCardList(books);
          break;

        default:
          setCardList(fakeData[type]);
          break;
      }
    };
    getData();
  }, [type]);
  return { cardList, title: CardListTitle[type], getItemsPerPage };
};

export default useCard;
