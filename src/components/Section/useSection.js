import Services from "@/services";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useSection = () => {
  const [sectionData, setSectionData] = useState(null);
  const searchParams = useSearchParams();
  const sectionId = searchParams.get("sectionId");

  useEffect(() => {
    const fetchSectionData = async () => {
      if (!sectionId) {
        toast.error("Section ID không tồn tại.");
        return;
      }

      try {
        const { data: sectionResponse } =
          await Services.bookService.getDetailSection(sectionId);
        const section = sectionResponse?.data;

        if (section?.book_id) {
          const { data: bookResponse } =
            await Services.bookService.getDetailBook(section.book_id);
          const book = bookResponse?.data;
          setSectionData({
            ...section,
            bookName: book?.name || "Không xác định",
          });
        } else {
          setSectionData(section);
        }
      } catch (error) {
        console.warn("Error fetching section data:", error);
        toast.error(error?.response?.data?.message || "Có lỗi xảy ra khi tải dữ liệu.");
      }
    };

    fetchSectionData();
  }, [sectionId]);

  return { sectionData };
};

export default useSection;
