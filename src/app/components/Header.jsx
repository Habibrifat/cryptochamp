"use client";
import Image from "next/image";
import Arena from "../../../public/images/Arena.png";
import Boutique from "../../../public/images/Boutique.png";
import crypto_logo from "../../../public/images/Logo.png";
import Staking_1 from "../../../public/images/Staking_1.png";
import Minting from "../../../public/images/Minting.png";
import rectangle9 from "../../../public/images/Rectangle 9.png";
import energy4x from "../../../public/images/energy@4x 1.png";
import Binance from "../../../public/images/binance-coin-bnb-logo 1.png";
import Farme from "../../../public/images/Frame.png";
import Farme_3 from "../../../public/images/Frame 3.png";
import Farme_3_1 from "../../../public/images/Frame 3_1.png";
import Gem from "../../../public/images/gem 1.png";
import Heart from "../../../public/images/heart@4x 1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden lg:flex items-center justify-between px-8 2xl:px-14 py-12 shadow-top gap-x-8">
        <div className=" flex items-center justify-between gap-x-8 2xl:gap-x-14">
          {/* logo */}
          <div className="flex-1 w-1/3">
            <Link href={"/"}>
              <Image
                src={crypto_logo}
                alt="crypto_logo"
                className="w-52 2xl:w-44"
              />
            </Link>
          </div>
          {/* logo */}
          {/* Menu Items */}
          <div className=" flex-1 w-2/3 border-2 border-[#180902] bg-[#180902] text-white p-1 rounded-2xl ">
            <div className="bg-[#24150C] rounded-2xl flex m-auto justify-between items-start gap-x-2 xl:gap-x-6 2xl:gap-x-8 2xl:px-8 px-4 relative">
              <Link
                href={"/arena"}
                className={`w-auto px-2 py-2 rounded-xl ${
                  pathname === "/arena" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8">
                  <Image
                    src={Heart}
                    alt="Heart"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Arena
                  </span>
                </div>
              </Link>
              <Link
                href={"/gem"}
                className={`w-auto px-2 py-2 rounded-xl ${
                  pathname === "/gem" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8">
                  <Image
                    src={Gem}
                    alt="Gem"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Boutique
                  </span>
                </div>
              </Link>
              <Link
                href={"/stake"}
                className={`w-auto px-2 py-2 rounded-xl ${
                  pathname === "/stake" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8">
                  <Image
                    src={Farme_3}
                    alt="Farme_3"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Staking
                  </span>
                </div>
              </Link>
              <Link
                href={"/frame"}
                className={`w-auto px-2 py-2 rounded-xl ${
                  pathname === "/frame" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8 pb-2">
                  <Image
                    src={Farme_3_1}
                    alt="Farme_3_1"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Minting
                  </span>
                </div>
              </Link>
            </div>
          </div>
          {/* end of Menu Items */}
        </div>
        <div className="flex items-center justify-between gap-x-12">
          <div>
            <div className="bg-[#5A2713] rounded-xl w-32 2xl:w-60 2xl:h-8 h-5 relative flex flex-row justify-center items-center">
              <Image
                src={energy4x}
                alt="energy4x"
                className=" absolute -left-2 z-10 w-8 2xl:w-12"
              />

              <div className="bg-[#FFCC39] rounded-lg absolute 2xl:left-0.5 left-2 2xl:h-8 h-5 w-24 2xl:w-40"></div>

              <span className="absolute top-0.5 2xl:top-1 font-bold text-white text-xs 2xl:text-sm">
                8/10
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-8">
            <div className="border-4 border-[#180902] bg-[#180902] text-white rounded-2xl">
              <div className="bg-[#24150C] w-[100px] h-[30px] 2xl:w-[120px] 2xl:h-[40px] rounded-2xl relative flex justify-center items-center">
                <Image
                  src={Binance}
                  alt="Binance"
                  className=" absolute -left-6 2xl:w-12 w-10"
                />
                <span className=" absolute top-1 2xl:top-2 left-8 2xk:left-12 font-bold text-white text-base">
                  16453
                </span>
              </div>
            </div>
            <div className="border-4 border-[#180902] bg-[#180902] text-white rounded-2xl">
              <div className="bg-[#24150C] w-[100px] h-[30px] 2xl:w-[120px] 2xl:h-[40px] rounded-2xl relative flex justify-center items-center">
                <Image
                  src={Farme}
                  alt="Farme"
                  className=" absolute -left-6 2xl:w-12 w-10"
                />
                <span className=" absolute top-1 2xl:top-2 left-8 font-bold text-white text-base">
                  0x...E8
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile and tablet */}
      <div className="lg:hidden pb-28">
        <div className=" fixed top-0 left-0 right-0 z-[9999]">
          <div className="flex justify-between items-center gap-x-4 shadow-top ms:px-8 px-2">
            <div className="my-4 sm:my-8">
              <Link href={"/"}>
                <Image
                  src={crypto_logo}
                  alt="crypto_logo"
                  className="w-28 min-w-24 sm:w-full"
                />
              </Link>
            </div>
            <div className=" flex gap-x-4 sm:gap-x-14">
              <div className="border-4 border-[#180902] bg-[#180902] text-white rounded-2xl">
                <div className="bg-[#24150C] w-[90px] sm:w-[120px] h-[30px] sm:h-[40px] rounded-2xl relative flex justify-center items-center">
                  <Image
                    src={Binance}
                    alt="Binance"
                    className=" absolute -left-4 sm:-left-6 w-8 sm:w-12"
                  />
                  <span className=" absolute top-2 left-8 sm:left-12 font-bold text-white text-xs sm:text-base">
                    16453
                  </span>
                </div>
              </div>
              <div className="border-4 border-[#180902] bg-[#180902] text-white rounded-2xl">
                <div className="bg-[#24150C] w-[90px] h-[30px] sm:w-[100px] sm:h-[40px] rounded-2xl relative flex justify-center items-center">
                  <Image
                    src={Farme}
                    alt="Farme"
                    className=" absolute -left-4 sm:-left-6 w-8 sm:w-12"
                  />
                  <span className=" absolute  top-2 left-8 font-bold text-white text-xs sm:text-base">
                    0x...E8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 max-w-[400px] sm:max-w-[900px] m-auto z-[9999]">
          <div className="border-2 border-[#180902] bg-[#180902] text-white p-1 rounded-2xl m-4 sm:m-8">
            <div className="bg-[#24150C] rounded-2xl flex justify-between items-start gap-x-4 px-2 sm:px-8 relative">
              <Link
                href={"/arena"}
                className={`w-auto px-2 py-2 xl:px-6 xl:py-2 rounded-xl ${
                  pathname === "/arena" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8">
                  <Image
                    src={Heart}
                    alt="Heart"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Arena
                  </span>
                </div>
              </Link>
              <Link
                href={"/gem"}
                className={`w-auto px-2 py-2 xl:px-6 xl:py-2 rounded-xl ${
                  pathname === "/gem" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8">
                  <Image
                    src={Gem}
                    alt="Gem"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Boutique
                  </span>
                </div>
              </Link>
              <Link
                href={"/stake"}
                className={`w-auto px-2 py-2 xl:px-6 xl:py-2 rounded-xl ${
                  pathname === "/stake" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8">
                  <Image
                    src={Farme_3}
                    alt="Farme_3"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Staking
                  </span>
                </div>
              </Link>
              <Link
                href={"/frame"}
                className={`w-auto px-2 py-2 xl:px-6 xl:py-2 rounded-xl ${
                  pathname === "/frame" ? "link-active-bg" : ""
                }`}
              >
                <div className="-mt-8 pb-2">
                  <Image
                    src={Farme_3_1}
                    alt="Farme_3_1"
                    className="pb-1 w-14 h-14 object-cover"
                  />
                  <span className="text-xs 2xl:text-sm font-bold text-white">
                    Minting
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
