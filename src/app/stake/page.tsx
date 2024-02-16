"use client";
import Image from "next/image";
import crypto_link from "../../public/images/Links.png";
import crypto_rectangle from "../../public/images/Rectangle 18.png";
import crypto_wallet_ballance from "../../public/images/wallet + balance.png";
import crypto_energy from "../../public/images/Energy.png";
import minus from "../../../public/images/minus.png";
import plus from "../../../public/images/plus.png";
import Header from "../components/Header";
import { useState } from "react";
import MyPopup from "../components/popup";

export default function Stake() {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }
  return (
    <>
      <main>
        <section className="section-container min-h-screen">
          {/* Header */}
          <Header />
          {/* end of Header */}f
          <div className="flex justify-center items-center text-white flex-col pb-40">
            <h4 className=" text-3xl py-8 font-bold text-white">
              Stake your CCG tokens
            </h4>
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-x-8 gap-y-8">
              <div className="lg:flex-1 lg:w-[380px] w-[300px] lg:h-[506px] h-[405px] token1 relative">
                <div className=" absolute  lg:top-32 top-24 lg:left-32 left-24">
                  <span className="text-white text-xl font-bold">$CCG/ETH</span>
                </div>
                <div className="absolute  top-36 lg:top-48  left-8">
                  <div className="flex flex-col gap-y-4">
                    <div className="group lg:w-[306px] w-[238px] lg:h-[54px] h-[40px] flex justify-between items-center px-4">
                      <span className=" text-[#D79D7B] text-sm">APY</span>
                      <span className=" text-white text-xl font-bold">
                        64.87%
                      </span>
                    </div>
                    <div className="group1  lg:w-[306px] w-[238px] lg:h-[54px] h-[40px] object-cover flex justify-between items-center px-4">
                      <span className=" text-[#D79D7B] text-sm">Liquidity</span>
                      <span className=" text-white text-xl font-bold">
                        $ 232,682
                      </span>
                    </div>
                    <div className="group2  lg:w-[306px] w-[238px] lg:h-[54px] h-[40px] object-cover flex justify-between items-center px-4">
                      <span className=" text-[#D79D7B] text-sm">
                        Earnings (24h)
                      </span>
                      <span className=" text-white text-xl font-bold">
                        $ 172.12
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" absolute bottom-10 right-16 lg:right-28  text-center">
                  <span className="text-[#A7ACB6] text-xs">My Liquidity</span>
                  <div className="flex flex-row justify-center items-center gap-x-4">
                    <Image
                      src={minus}
                      alt="minus"
                      className="w-[32px] lg:w-full"
                      onClick={openPopup}
                    />
                    <span className="text-xl font-bold">23.43</span>
                    <Image
                      src={plus}
                      alt="plus"
                      className="w-[32px] lg:w-full"
                      onClick={openPopup}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex-1 lg:w-[380px] w-[300px] lg:h-[506px] h-[405px] token2 relative">
                <div className=" absolute   top-24 lg:top-32  left-32 lg:left-40">
                  <span className="text-white text-xl font-bold">ETH</span>
                </div>
                <div className="absolute  top-36 lg:top-48  left-8">
                  <div className="flex flex-col gap-y-4">
                    <div className="group lg:w-[306px] w-[238px] lg:h-[54px] h-[40px] flex justify-between items-center px-4">
                      <span className=" text-[#D79D7B] text-sm">APY</span>
                      <span className=" text-white text-xl font-bold">
                        64.87%
                      </span>
                    </div>
                    <div className="group1 lg:w-[306px] w-[238px] lg:h-[54px] h-[40px] flex justify-between items-center px-4">
                      <span className=" text-[#D79D7B] text-sm">Liquidity</span>
                      <span className=" text-white text-xl font-bold">
                        $ 232,682
                      </span>
                    </div>
                    <div className="group2 lg:w-[306px] w-[238px] lg:h-[54px] h-[40px] flex justify-between items-center px-4">
                      <span className=" text-[#D79D7B] text-sm">
                        Earnings (24h)
                      </span>
                      <span className=" text-white text-xl font-bold">
                        $ 172.12
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" absolute bottom-10 right-16 lg:right-28  text-center">
                  <span className="text-[#A7ACB6] text-xs">My Liquidity</span>
                  <div className="flex flex-row justify-center items-center gap-x-4">
                    <Image
                      src={minus}
                      alt="minus"
                      className="w-[32px] lg:w-full"
                      onClick={openPopup}
                    />
                    <span className="text-xl font-bold">0.00</span>
                    <Image
                      src={plus}
                      alt="plus"
                      className="w-[32px] lg:w-full"
                      onClick={openPopup}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MyPopup isOpen={isOpen} closePopup={closePopup} />
        </section>
      </main>
    </>
  );
}
