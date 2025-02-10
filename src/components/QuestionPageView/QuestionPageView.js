import React from "react";
import HeaderView from "../Layout/Header/HeaderView";
import { motion } from "framer-motion";
import SideBarLeftView from "../Layout/SideBarLeft/SideBarLeftView";
import FooterView from "../Layout/Footer/FooterView";
import useQuestionModal from "../QuestionModal/useQuestionModal";
import useSideBarLeft from "../Layout/SideBarLeft/useSideBarLeft";
import QuestionItemView from "../Section/QuestionItem/QuestionItemView";

const QuestionPageView = () => {
  const { question } =
    useQuestionModal();

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
          <QuestionItemView
            questionItem={{
              question: question,
            }}
          />
        </main>
      </div>

      <FooterView />
    </div>
  );
};

export default QuestionPageView;
