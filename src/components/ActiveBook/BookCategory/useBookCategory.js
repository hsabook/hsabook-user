import { useState, useEffect } from "react";

const useBookCategory = () => {
  const [category, setCategory] = useState([]);

  const fetchCategory = () => {
    try {
      const data = [
        "Sách đánh giá tư duy TSA Bách Khoa Hà Nội",
        "Sách đánh giá năng lực HSA",
        "Sách tổng hợp kiến thức thi đánh gia tư duy",
      ];
      setCategory(data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return { category };
};

export default useBookCategory;
