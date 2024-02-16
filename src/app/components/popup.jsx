"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import ETH from "../../../public/images/eth.png";
import CCG from "../../../public/images/logo CCG no bg 3.png";
import closeBtn from "../../../public/images/Group_3.png";

function MyPopup({ isOpen, closePopup }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closePopup}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="popup-content text-white w-[21rem] h-[24.5rem] object-cover flex flex-col gap-y-6 justify-center items-center m-auto relative">
              <div>
                <span className=" font-bold text-xl"> Add Liquidity</span>
                <div className="flex justify-center items-center gap-x-2 pt-1">
                  <Image src={ETH} alt="ETH" className="w-3" />
                  <span className=" text-xs font-bold">ETH</span>
                </div>
              </div>
              <div className="text-center">
                <div className="group4 w-[248px] h-[42px]">
                  <span className="font-bold text-base leading-8">
                    0.276487
                  </span>
                </div>
                <span className=" text-[#B9ADA6] text-xs">~ 284, 59 $</span>
              </div>
              <div className="bg-[#813616] border-[#351909] w-72 h-2 rounded-lg border-1 relative">
                <div className="bg-[#01E18B] w-12 h-2 rounded-lg">
                  <Image
                    src={CCG}
                    alt="CCG"
                    className="w-4 absolute -top-2 left-10"
                  />
                  <span className="text-[#B8B8B8] text-xs absolute top-5 left-10">
                    13%
                  </span>
                </div>
              </div>
              <div className=" flex flex-row gap-x-2 mt-4">
                <div className="rectangle_btn1 text-center w-12 h-8 object-cover">
                  <span className="text-[#0C572F] text-xs font-bold">25%</span>
                </div>
                <div className="rectangle_btn1 text-center w-12 h-8 object-cover">
                  <span className="text-[#0C572F] text-xs font-bold">50%</span>
                </div>
                <div className="rectangle_btn1 text-center w-12 h-8 object-cover">
                  <span className="text-[#0C572F] text-xs font-bold">75%</span>
                </div>
                <div className="rectangle_btn2 text-center w-20 h-8 object-cover">
                  <span className="text-[#0C572F] text-xs font-bold">Max</span>
                </div>
              </div>

              <div className="popup_confirm_btn w-52 h-14 text-center my-4">
                <span className="text-[#753901]  font-bold  text-base leading-[3rem] ">
                  Confirm
                </span>
              </div>
              <div
                className="popupclosebtn absolute w-10 top-0 right-0 cursor-pointer"
                onClick={closePopup}
              >
                <Image src={closeBtn} alt="closeBtn" />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MyPopup;
