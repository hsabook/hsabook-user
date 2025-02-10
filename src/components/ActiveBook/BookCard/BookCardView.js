import Image from "next/image";
import React from "react";
import BookCardFooterView from "./BookCardFooterView";
import useRedirect from "@/components/Home/useRedirect";

const BookCardView = ({ currentData, currentPage, totalPages, goToPage }) => {
  const { redirect } = useRedirect();

  return (
    <>
      <div className="flex w-full flex-wrap">
        {currentData.map(({ book }) => (
          <div
            key={book.id}
            className="basis-full xs:basis-1/2 lg:basis-1/4 rounded-md overflow-hidden shadow-sm shrink-0 bg-white scale-95 cursor-pointer flex flex-col"
            onClick={() => redirect(`/sach-cua-toi/${book.id}`)}
          >
            <div className="w-full aspect-[3/4] relative overflow-hidden">
              <Image layout="fill" alt="card img" src={book.avatar} />
            </div>
            <div className="flex flex-col py-2 px-4 justify-between grow">
              <h4 className="font-semibold line-clamp-2 text-ellipsis my-2 text-lg grow">
                {book.name}
              </h4>
              <div className="mb-4">
                <div className="flex items-end gap-1 mb-2">
                  <i class="fa-regular fa-user"></i>
                  <span className="text-end leading-none">
                    {book.author || "HSA Education"}
                  </span>
                </div>
                <p className="text-gray-600">{book.code_id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* FOOTER */}
      <BookCardFooterView
        totalPages={totalPages}
        onPageChange={goToPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default BookCardView;
