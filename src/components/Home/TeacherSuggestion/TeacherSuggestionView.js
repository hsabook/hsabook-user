import React from "react";
import useTeacherSuggestion from "./useTeacherSuggestion";
import Image from "next/image";
import usePagination from "@/hooks/usePagination";

const TeacherSuggestionView = () => {
  const { teacherSuggestions, getItemsPerPage } = useTeacherSuggestion();
  const { currentData, currentPage, totalPages, nextPage, prevPage } =
    usePagination(teacherSuggestions, getItemsPerPage);
  return (
    <div className="mt-5 bg-white rounded-lg p-4 w-full overflow-hidden flex justify-center flex-col">
      <div
        className="
          grid gap-4 
          grid-cols-2 
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          w-full
        "
      >
        {currentData.map((teacher) => (
          <div
            key={teacher.id}
            className="relative aspect-[3/4] overflow-hidden cursor-pointer rounded-md bg-gray-400"
          >
            <Image src={teacher.avatarUrl} layout="fill" alt="teacher avatar" />
            <span className="absolute bottom-0 w-full text-center p-2 text-sm font-semibold text-white bg-gradient-to-t from-black to-transparent leading-tight">
              {teacher.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-5 items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 text-green-500 rounded-md disabled:opacity-50 text-2xl"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-green-500 rounded-md disabled:opacity-50 text-2xl"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default TeacherSuggestionView;
