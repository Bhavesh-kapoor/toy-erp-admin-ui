"use client";

import { tabs } from "@/data/tabs";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoLogOutSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import { bigShoulders } from "@/font/font";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { user, token, logout } = useAuth();
  const [stateReady, setStateReady] = useState(false);

  useEffect(() => {
    setStateReady(true);
  }, []);

  return (
    <>
      {stateReady && token && (
        <nav className={`bg-primary fixed w-[83%] ml-[17%] z-50 px-4 py-3 text-white ${bigShoulders.className}`}>
          <div className="flex justify-between items-center">
            {tabs.map((tab) => {
              let isPageTitleExist: any = [];
              if (tab?.tabs)
                isPageTitleExist = tab?.tabs.filter(
                  (item: any) => item?.href === pathname
                );
              return (
                <div
                  key={tab?.id}
                  className={`${
                    pathname !== tab?.href &&
                    isPageTitleExist?.length === 0 &&
                    "hidden"
                  } text-3xl font-medium`}
                >
                  {isPageTitleExist && isPageTitleExist.length > 0
                    ? isPageTitleExist[0]?.pageTitle
                    : tab?.pageTitle}
                </div>
              );
            })}
            <p className="inline-flex gap-2 items-center">
              <span className="flex gap-2 items-center text-lg font-medium">
                <FaUser />
                {user?.email}
              </span>
              <span
                onClick={logout}
                title="Logout"
                className="py-2 px-1 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-all duration-100 ease-in-out"
              >
                <IoLogOutSharp size={30} />
              </span>
            </p>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
