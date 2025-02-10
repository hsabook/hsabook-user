import useRedirect from "@/components/Home/useRedirect";
import React from "react";
import useBookCategory from "./useBookCategory"

const BookCategoryView = () => {
  const { redirect } = useRedirect();
  const { category } = useBookCategory();
  return (
    <div className="p-6 w-full">
      <nav class="flex items-center mb-6">
        <div onClick={() => redirect("/")} class="text-gray-500 cursor-pointer whitespace-nowrap text-sm">
          Trang chủ
        </div>
        <span class="text-gray-500 mx-2"> {">"} </span>
        <div class="text-green-600 truncate text-sm">Sách đã kích hoạt</div>
      </nav>

      <h2 class="text-green-700 text-2xl mb-8 font-semibold">Danh mục</h2>

      <div class="md:space-y-2 flex flex-wrap gap-3 md:block">
        {category.map((item, index) => (
          <div key={index} class="bg-gray-200 p-2 rounded-md line-clamp-2">
            <a href="#" class="text-green-700">
              {item}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCategoryView;
