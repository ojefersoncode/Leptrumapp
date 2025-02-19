"use client";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import ProfileStore from "@/components/profile-store";
import { Sidebar } from "@/components/sidebar";

const Store = () => {
  return (
    <>
      <div className="min-h-screen w-full mx-auto bg-gray-900 text-white flex flex-col items-center justify-center text-center">
        <div className="w-full fixed top-0 z-20">
          <Sidebar />
        </div>

        <div className="w-full">
          <ProfileStore />
        </div>

        <div className="w-full mt-7">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Store;
