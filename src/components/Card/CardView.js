import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import useCard, { CARD_TYPE } from "./useCard";
import usePagination from "@/hooks/usePagination";

const CardView = ({ type }) => {
  const { cardList, title, getItemsPerPage } = useCard(type);
  const { currentData, currentPage, totalPages, nextPage, prevPage, goToPage } =
    usePagination(cardList, getItemsPerPage);

  return (
    <div className="mt-5 bg-white rounded-lg p-4 w-full overflow-hidden flex justify-center flex-col">
      <div className="flex justify-between my-3">
        <div className="text-green-600 text-xl font-semibold">{title}</div>
      </div>
      <div
        className="
          grid gap-4 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
        "
      >
        {currentData.map((card) => (
          <div
            key={card.id}
            className="rounded-md overflow-hidden shadow-sm bg-gray-50"
          >
            <div className="w-full aspect-[3/4] relative overflow-hidden bg-slate-100">
              <Image layout="fill" alt="card img" src={card.avatar} />
              {type === CARD_TYPE.BOOK && (
                <span className="absolute right-1 top-1 w-12 font-semibold bg-red-600 text-[12px] rounded-full text-white text-center p-1">
                  -{card.discard || "50%"}
                </span>
              )}
            </div>
            <div className="flex flex-col p-2 justify-between">
              <h4 className="font-semibold text-green-600 text-lg">
                {card.name}
              </h4>
              <div className="mb-4">
                <div className="flex gap-2 mb-2 text-sm text-green-600 items-center">
                  <i className="fa-regular fa-user"></i>
                  <span className="leading-none line-clamp-2">
                    {card.authors || "HSA Education"}
                  </span>
                </div>
                <p className="text-sm text-green-600">{card.code_id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Điều hướng phân trang */}
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

CardView.PropTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default CardView;
