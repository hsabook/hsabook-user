import React from "react";
import HeaderView from "../Layout/Header/HeaderView";
import SideBarLeftView from "../Layout/SideBarLeft/SideBarLeftView";
import FooterView from "../Layout/Footer/FooterView";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import UserPageView from "./UserPage/UserPageView";
import useUserInfoPage from "./useUserInfoPage";
import useSideBarLeft from "../Layout/SideBarLeft/useSideBarLeft";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const UserInfoView = () => {
  const {
    editMode,
    toggleEditMode,
    register,
    handleSubmit,
    formState,
    setValue,
    control,
    userInfo,
    handleSubmitEdit,
  } = useUserInfoPage();
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

        <main className="w-full xs:flex-1 p-4 bg-gray-100 relative">
          <UserPageView
            editMode={editMode}
            toggleEditMode={toggleEditMode}
            userInfo={userInfo}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            setValue={setValue}
            control={control}
            handleSubmitEdit={handleSubmitEdit}
          />
        </main>
      </div>

      <FooterView />

      <Toaster />
    </div>
  );
};

export default UserInfoView;
