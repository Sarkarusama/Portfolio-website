import React from "react";
import { IoIosCheckboxOutline } from "react-icons/io";

const Skills = () => {
  return (
    <div id="skill">
      <section className=" text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-gray-100 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#eca400] ">
              MY Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                    <IoIosCheckboxOutline className="text-2xl font-extrabold text-[#141a2f]" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-[#eca400] h-1 w-[70%]"></div>
                  </div>
                  <p className="font-bold text text-[#eca400] text-right">
                    70%
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                    <IoIosCheckboxOutline className="text-2xl font-extrabold text-[#141a2f]" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-[#eca400] h-1 w-[40%]"></div>
                  </div>
                  <p className="font-bold text text-[#eca400] text-right">
                    40%
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                    <IoIosCheckboxOutline className="text-2xl font-extrabold text-[#141a2f]" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    Javascript/Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-[#eca400] h-1 w-[40%]"></div>
                  </div>
                  <p className="font-bold text text-[#eca400] text-right">
                    40%
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                    <IoIosCheckboxOutline className="text-2xl font-extrabold text-[#141a2f]" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    Next Js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-[#eca400] h-1 w-[10%]"></div>
                  </div>
                  <p className="font-bold text text-[#eca400] text-right">
                    10%
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                    <IoIosCheckboxOutline className="text-2xl font-extrabold text-[#141a2f]" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    React
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-[#eca400] h-1 w-[20%]"></div>
                  </div>
                  <p className="font-bold text text-[#eca400] text-right">
                    20%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
