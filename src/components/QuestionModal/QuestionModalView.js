import React from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import VideoPlayerView from "../Section/VideoPlayer/VideoPlayerView";

const QuestionModalView = ({ question, toggleViewDetail }) => {
  return ReactDOM.createPortal(
    <div className="h-full overflow-hidden w-full bg-[rgba(0,0,0,0.5)] absolute right-0 z-10 top-0 flex justify-center">
      <motion.div
        className="bg-gray-100 h-[90%] w-[90%] relative overflow-y-scroll scroll-container pb-12 mt-5 rounded-md"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full p-2 flex justify-end">
          <button
            className="p-1 flex items-center justify-center rounded-sm text-gray-600"
            onClick={toggleViewDetail}
          >
            <span className="italic underline leading-loose">Ẩn lời giải</span>
            <i class="fa-solid fa-chevron-right text-[12px] ml-1"></i>
          </button>
        </div>
        <div className="flex flex-col p-4 mt-6">
          <div className="question font-bold mb-4 flex items-start gap-2">
            <span
              className="text-base text-black"
              dangerouslySetInnerHTML={{
                __html: question?.question || "",
              }}
            />
          </div>
          <div className="answer font-bold mt-4">
            Đáp án: {question?.answers.join(", ")}
          </div>
          <div className="italic mt-4">Lời giải</div>
          <div
            dangerouslySetInnerHTML={{
              __html: question?.solution || "Chưa có lời giải chi tiết",
            }}
            className="my-4 bg-white p-4 rounded-lg"
          />
          {question?.video && (
            <div className="flex items-center justify-center w-full">
              <div className="w-full md:w-3/4 lg:w-2/3">
                <VideoPlayerView video={question.video} />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>,
    document.querySelector("main")
  );
};

export default QuestionModalView;
