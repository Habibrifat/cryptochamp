// RangeSlider.js

import { useRef, useState } from "react";
import Image from "next/image";
import CCG from "../../../public/images/logo CCG no bg 3.png"; // Import your CCG image

const RangeSlider = () => {
  const [value, setValue] = useState(50); // Initial value

  const customThumbStyle = {
    left: `calc(${value}% - 7px)`,
  };

  return (
    <div className="bg-[#813616] border-[#351909] w-72 h-2 rounded-lg border-1 relative">
      <div
        className="bg-[#01E18B] h-2 rounded-lg"
        style={{ width: `${value}%` }}
      >
        {/* <Image src={CCG} alt="CCG" className="w-4 absolute -top-2 left-10" /> */}
        <span className="text-[#B8B8B8] text-xs absolute top-4 left-10">
          {value}%
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 absolute top-0 left-0 opacity-0 cursor-pointer"
        style={{ zIndex: 2 }} // Ensure the range input is on top for styling
      />
      {/* Custom range thumb */}
      <div
        className="w-5 h-5 object-cover  absolute top-[-7px] range_img"
        style={{ ...customThumbStyle, zIndex: 1 }}
      ></div>
    </div>
  );
};

export default RangeSlider;
