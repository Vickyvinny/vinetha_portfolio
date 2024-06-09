import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-55 h-55 p-4 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300 cursor-pointer">
      <div className="overflow-y-hidden w-full">
        <div className="flex flex-col items-center gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-12 h-12 flex justify-center items-center">
            {icon ? (
              <span className="text-4xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-base font-titleFont font-bold text-gray-300 text-center">
              {title}
            </h2>
            <p className="text-xs text-center">{des}</p>{" "}

            <span className="text-xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
