import React from "react";
import HeaderView from "../Layout/Header/HeaderView";
import FooterView from "../Layout/Footer/FooterView";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import SideBarLeftView from "../Layout/SideBarLeft/SideBarLeftView";
import useDetailBook from "./useDetailBook";
import BookSection from "./BookSection/BookSectionView";
import BookThumbnailView from "./BookSection/BookThumbnailView";
import useSideBarLeft from "../Layout/SideBarLeft/useSideBarLeft";

import { motion } from "framer-motion";

const DetailBookView = () => {
  const { sections, book, onClickSection } = useDetailBook();
  const { showSidebar, toggleShowSidebar } = useSideBarLeft();

  return (
    <div className="flex flex-col min-h-screen relative">
      <HeaderView toggleShowSidebar={toggleShowSidebar} />

      {showSidebar && (
        <div className="fixed z-20 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] overflow-hidden">
          <motion.div
            className="bg-white flex h-full w-fit relative"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute right-2 top-5">
              <button
                className="p-1 border border-gray-200 w-7 h-7 flex items-center justify-center rounded-sm"
                onClick={toggleShowSidebar}
              >
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <SideBarLeftView />
          </motion.div>
        </div>
      )}

      <div className="flex h-[calc(100vh-42px)] w-full relative">
        <aside className="hidden md:block shadow-sm">
          <SideBarLeftView />
        </aside>

        <main className="w-full xs:flex-1 p-4 bg-gray-100 relative">
          <BookThumbnailView
            urlImg={book.urlImg}
            bookName={book.bookName}
            userAuthor={book.userAuthor}
            tagName={book.tagName}
            startNum={book.startNum}
            expireDate={book.expireDate}
            book={book}
          />
          <div className="mb-12">
            <BookSection onClick={onClickSection} data={sections} />
          </div>
        </main>
      </div>

      <FooterView />
    </div>
  );
};
export default DetailBookView;
