import { useWallet } from "@txnlab/use-wallet";
import { useState } from "react";
import userImg from "../assets/user-img.png";
import { useTheme } from "../hooks/theme";
import ConnectWallet from "./ConnectWallet";
import { ThemeButton } from "./ThemeBtn";
export const DashboardHeader = () => {
  const { theme, toggleTheme } = useTheme();

  const { activeAddress } = useWallet();
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
  const toggleWalletModal = () => {
    // if (activeAddress) return;
    setOpenWalletModal(!openWalletModal);
  };

  return (
    <>
      <header className="w-full flex justify-between px-10 py-[29px] bg-white dark:bg-[#1E1E1E] ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Here"
          className=" bg-[#2EA15C1F] dark:bg-[rgba(255,_255,_255,_0.1)] outline-0 rounded-2xl border border-[#FFFFFF1F] w-[264px] h-[42px] px-8 py-[13px] font-poppins text-base text-[#ACB2BE]  "
        />
        <div className="flex gap-5">
          <ThemeButton theme={theme} themeHandler={toggleTheme} />
          <span>
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <g clipPath="url(#clip0_73_200)">
                  <rect opacity="0.1" width="264" height="42" fill="#F8F8F8" fillOpacity="0.972549" />
                  <mask id="mask0_73_200" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="24">
                    <rect x="9" y="9" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_73_200)">
                    <path
                      d="M12.999 28V26H14.999V19C14.999 17.6167 15.4157 16.3875 16.249 15.3125C17.0824 14.2375 18.1657 13.5333 19.499 13.2V12.5C19.499 12.0833 19.6449 11.7292 19.9365 11.4375C20.2282 11.1458 20.5824 11 20.999 11C21.4157 11 21.7699 11.1458 22.0615 11.4375C22.3532 11.7292 22.499 12.0833 22.499 12.5V13.2C23.8324 13.5333 24.9157 14.2375 25.749 15.3125C26.5824 16.3875 26.999 17.6167 26.999 19V26H28.999V28H12.999ZM20.999 31C20.449 31 19.9782 30.8042 19.5865 30.4125C19.1949 30.0208 18.999 29.55 18.999 29H22.999C22.999 29.55 22.8032 30.0208 22.4115 30.4125C22.0199 30.8042 21.549 31 20.999 31ZM16.999 26H24.999V19C24.999 17.9 24.6074 16.9583 23.824 16.175C23.0407 15.3917 22.099 15 20.999 15C19.899 15 18.9574 15.3917 18.174 16.175C17.3907 16.9583 16.999 17.9 16.999 19V26Z"
                      fill="#F8F8F8"
                      fillOpacity="0.972549"
                    />
                  </g>
                </g>
                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="white" strokeOpacity="0.12" />
                <defs>
                  <clipPath id="clip0_73_200">
                    <rect width="42" height="42" rx="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <g clipPath="url(#clip0_42_961)">
                  <rect opacity="0.1" width="264" height="42" fill="#6A6A6A" />
                  <mask id="mask0_42_961" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="24">
                    <rect x="9" y="9" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_42_961)">
                    <path
                      d="M12.999 27.9995V25.9995H14.999V18.9995C14.999 17.6162 15.4157 16.387 16.249 15.312C17.0824 14.237 18.1657 13.5328 19.499 13.1995V12.4995C19.499 12.0828 19.6449 11.7287 19.9365 11.437C20.2282 11.1453 20.5824 10.9995 20.999 10.9995C21.4157 10.9995 21.7699 11.1453 22.0615 11.437C22.3532 11.7287 22.499 12.0828 22.499 12.4995V13.1995C23.8324 13.5328 24.9157 14.237 25.749 15.312C26.5824 16.387 26.999 17.6162 26.999 18.9995V25.9995H28.999V27.9995H12.999ZM20.999 30.9995C20.449 30.9995 19.9782 30.8037 19.5865 30.412C19.1949 30.0203 18.999 29.5495 18.999 28.9995H22.999C22.999 29.5495 22.8032 30.0203 22.4115 30.412C22.0199 30.8037 21.549 30.9995 20.999 30.9995ZM16.999 25.9995H24.999V18.9995C24.999 17.8995 24.6074 16.9578 23.824 16.1745C23.0407 15.3912 22.099 14.9995 20.999 14.9995C19.899 14.9995 18.9574 15.3912 18.174 16.1745C17.3907 16.9578 16.999 17.8995 16.999 18.9995V25.9995Z"
                      fill="#6A6A6A"
                    />
                  </g>
                </g>
                <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#2EA15C" strokeOpacity="0.2" />
                <defs>
                  <clipPath id="clip0_42_961">
                    <rect width="42" height="42" rx="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </span>

          <button
            onClick={toggleWalletModal}
            type="button"
            className="capitalize rounded-2xl py-2 px-4 bg-primary text-[#D9D9D9] font-poppins text-base font-medium flex items-center justify-center "
          >
            {activeAddress ? "Connected" : "Connect Wallet"}
          </button>

          <div>
            <img src={userImg} alt="" className="w-8 h-8 rounded-[200px]" />
          </div>
        </div>
      </header>
      <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
    </>
  );
};
