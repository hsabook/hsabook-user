import React from "react";

const FooterView = () => {
  return (
    <footer class="w-full px-12 py-10 pb-2 text-white bg-green-500">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 class="font-bold text-xl mb-4">LIÊN HỆ</h2>
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <i class="fas fa-school"></i>
              <p>HSA education - Chuyên luyện thi ĐGNL HSA - VNU</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-user"></i>
              <p>Chịu trách nhiệm nội dung: Thầy Văn Hoa</p>
            </div>
            <div class="flex items-start gap-2">
              <i class="fas fa-map-marker-alt mt-1"></i>
              <p>SN 11B, ngõ 3, Phạm Tuấn Tài, Dịch Vọng, Cầu Giấy, Hà Nội</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-envelope"></i>
              <p>thithuhsaedu@gmail.com</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-phone"></i>
              <p>0968964334</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="font-bold text-xl mb-4">DANH MỤC</h2>
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center">
                <i class="fas fa-book"></i>
              </div>
              <p>Khóa học</p>
            </div>
            <div class="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center">
                <i class="fas fa-file-alt"></i>
              </div>
              <p>Đề thi</p>
            </div>
            <div class="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center">
                <i class="fas fa-question-circle"></i>
              </div>
              <p>Hỏi đáp</p>
            </div>
            <div class="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center">
                <i class="fas fa-book-open"></i>
              </div>
              <p>Sách</p>
            </div>
            <div class="flex items-center gap-2">
              <div className="w-5 h-5 flex items-center">
                <i class="fas fa-file"></i>
              </div>
              <p>Tài liệu</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="font-bold text-xl mb-4">CHĂM SÓC HỌC VIÊN</h2>
          <div class="space-y-3">
            <p>Tư vấn lớp và sách</p>
            <div class="flex items-center gap-2">
              <i class="fas fa-phone"></i>
              <p>Mr.Long: 0988.371.194</p>
            </div>
            <div class="flex items-center gap-2">
              <i class="fas fa-phone"></i>
              <p>Ms.Thanh: 0379.620.188</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="font-bold text-xl mb-4">THÔNG TIN</h2>
          <div class="space-y-3">
            <p>Giới thiệu</p>
            <p>Câu Hỏi Thường Gặp</p>
            <p>Điều Khoản Dịch Vụ</p>
            <p>Chính Sách Bảo Mật</p>
          </div>
        </div>

        <div>
          <h2 class="font-bold text-xl mb-4">ĐIỀU KHOẢN</h2>
          <div class="space-y-3">
            <p>Hướng Dẫn Thanh Toán</p>
            <p>Kích Hoạt Khoá Học</p>
            <p>Cộng Tác Viên</p>
          </div>
        </div>
      </div>

      <div class="flex gap-4 mt-8">
        <a href="#" class="bg-blue-600 p-2 w-8 h-8 rounded-full flex items-center justify-center">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="bg-red-600 p-2 w-8 h-8 rounded-full flex items-center justify-center">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="#" class="bg-black p-2 w-8 h-8 rounded-full flex items-center justify-center">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>

      <div class="text-center mt-8">
        <p>2024 © Copyright by HSA EDUCATION. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterView;
