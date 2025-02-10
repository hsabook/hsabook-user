import HeaderView from "../Layout/Header/HeaderView";
import FooterView from "../Layout/Footer/FooterView";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import BookCardView from "./BookCard/BookCardView";
import BookCategoryView from "./BookCategory/BookCategoryView";
import useActiveBook from "./useActiveBook";
import useBookCard from "./BookCard/useBookCard";
import useSideBarLeft from "../Layout/SideBarLeft/useSideBarLeft";
import SideBarLeftView from "../Layout/SideBarLeft/SideBarLeftView";
import { motion } from "framer-motion";
import Empty from "../Empty";

const ActiveBookView = () => {
  const { activeBooks } = useActiveBook();
  const { currentData, currentPage, totalPages, goToPage } =
    useBookCard(activeBooks);

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

      <div className="flex bg-gray-100 flex-col md:flex-row">
        <div className="lg:max-w-xs">
          <BookCategoryView />
        </div>
        <main className="flex-1 px-4 py-12 relative">
          {currentData.length > 0 ? (
            <BookCardView
              currentData={currentData}
              currentPage={currentPage}
              totalPages={totalPages}
              goToPage={goToPage}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center flex-col min-h-[200px]">
              <span>Không có sách nào được kích hoạt</span>
              <Empty />
            </div>
          )}
        </main>
      </div>

      <FooterView />
    </div>
  );
};

export default ActiveBookView;
