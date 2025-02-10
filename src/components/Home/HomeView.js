import HeaderView from "@/components/Layout/Header/HeaderView";
import SideBarRight from "@/components/Layout/SideBarRight/SideBarRightView";
import FooterView from "@/components/Layout/Footer/FooterView";
import SearchSugestion from "./SearchSuggestion/SearchSugestionView";
import TeacherSuggestionView from "./TeacherSuggestion/TeacherSuggestionView";
import CardView from "../Card/CardView";
import { CARD_TYPE } from "../Card/useCard";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import ModalActiveBook from "../Modal/ModalActiveBook/ModalActiveBookView";
import useModalActiveBook from "../Modal/ModalActiveBook/useModalActiveBook";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import dynamic from "next/dynamic";
import FeedBackView from "../FeedBack/FeedBackView";
import useSideBarLeft from "../Layout/SideBarLeft/useSideBarLeft";
import { motion } from "framer-motion";
import SliderView from "../Slider/SliderView";

const SideBarLeftView = dynamic(
  () => import("@/components/Layout/SideBarLeft/SideBarLeftView"),
  { ssr: false }
);

export default function HomeView() {
  const router = useRouter();
  const { userInfo } = useUserInfo();

  const { open, onOpenModal, onCloseModal, onSubmit, isSubmitting } =
    useModalActiveBook();

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

      <div className="flex h-[calc(100vh-42px)] w-full">
        <aside className="hidden md:block shadow-sm">
          <SideBarLeftView />
        </aside>

        <main className="w-full xs:flex-1 p-4 bg-gray-100 overflow-y-scroll max-h-screen mb-6 relative scroll-container">
          <button
            onClick={onOpenModal}
            class="w-full bg-[#4CAF50] text-white py-3 rounded-lg my-3 flex items-center justify-center lg:hidden"
          >
            <i class="fas fa-mars mr-2"></i>
            Kích hoạt sách
          </button>
          <SliderView />
          <SearchSugestion />
          <TeacherSuggestionView />
          <CardView type={CARD_TYPE.EXAM} />
          <CardView type={CARD_TYPE.BOOK} />
          <FeedBackView title={"Vinh danh học sinh 2k6"} />
          <FeedBackView title={"Phản hồi của học sinh"} />
        </main>

        <aside className="hidden xl:block shadow-sm">
          <SideBarRight onOpenModal={onOpenModal} />
        </aside>
      </div>

      <FooterView />

      <ModalActiveBook
        isOpen={open}
        onClose={onCloseModal}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
