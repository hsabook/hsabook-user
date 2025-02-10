import React from "react";

const SideBarRight = ({ onOpenModal }) => {
  return (
    <div class="max-w-xs mx-auto p-4 overflow-y-scroll">
      <h1 class="text-[#2E7D32] text-2xl font-medium mb-4">BXH test</h1>
      <div class="flex items-center mb-4">
        <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl">
          T
        </div>
        <div class="ml-3 flex-grow">
          <div class="text-[#2E7D32]">TG-Nguyễn Xuân Hiếu</div>
          <div class="text-gray-500 text-sm">23:53 08/12/2024 (0.07 phút)</div>
        </div>
        <div class="bg-[#E91E63] text-white rounded-lg w-8 h-8 flex items-center justify-center text-lg">
          0
        </div>
      </div>
      <button
        onClick={onOpenModal}
        class="w-full bg-[#4CAF50] text-white py-3 rounded-lg mb-6 flex items-center justify-center"
      >
        <i class="fa-solid fa-key mr-2"></i>
        Kích hoạt sách
      </button>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-[#2E7D32] text-xl font-medium">Hỏi đáp</h2>
        <a class="text-gray-600 italic" href="#">
          Xem tất cả
        </a>
      </div>
      <div class="space-y-4">
        <div class="flex gap-4">
          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
            <img
              alt="Question and answer icon in white on green background"
              class="object-cover object-center"
              src="./images/Q&A.jpg"
            />
          </div>
          <div class="flex-grow">
            <h3 class="text-[#2E7D32] text-sm font-medium leading-tight">
              TỔNG HỢP CÁC CÂU HỎI THẮC MẮC VỀ KỲ THI ĐÁNH GIÁ NĂNG...
            </h3>
            <div class="flex items-center text-gray-500 mt-1">
              <i class="far fa-calendar-alt mr-2"></i>
              03/11/2024 22:55
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
            <img
              alt="Question and answer icon in white on green background"
              class="object-cover object-center"
              src="./images/Q&A.jpg"
            />
          </div>
          <div class="flex-grow">
            <h3 class="text-[#2E7D32] text-sm font-medium leading-tight">
              Những điểm mới trong kỳ thi Đánh giá năng lực HSA năm 2025
            </h3>
            <div class="flex items-center text-gray-500 mt-1">
              <i class="far fa-calendar-alt mr-2"></i>
              28/11/2024 14:53
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
