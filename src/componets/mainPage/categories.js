import React from 'react';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import {
  MdOutlineEmojiFoodBeverage,
  MdOutlineSportsHandball,
  MdTravelExplore,
} from 'react-icons/md';
import { GrPersonalComputer } from 'react-icons/gr';
import { SiGitbook } from 'react-icons/si';
import { AiFillCar } from 'react-icons/ai';
import { FaDog, FaBaby } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { RiServiceLine, RiMentalHealthLine } from 'react-icons/ri';
import { MdOutlineComputer } from 'react-icons/md';

function Categories() {
  return (
    <div className="bg-gray-100 lg:py-16 py-10 mt-8">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div class="mb-10 flex justify-center">
          <div class="text-center w-full lg:w-2/5">
            <h2 class="text-xl lg:text-2xl mb-2 font-serif font-semibold">Choose categories.</h2>
            <p class="text-base font-sans text-gray-600 leading-6">You can find everything here.</p>
          </div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded  flex justify-center flex-col items-center w-full h-full border  shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <BsFillHouseDoorFill className="text-teal-200 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Properties
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <MdOutlineEmojiFoodBeverage className="text-sky-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Food
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <MdOutlineComputer className="text-teal-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Electronics
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <SiGitbook className="text-indigo-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Education
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center  w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <AiFillCar className="text-violet-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Cars
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <FaDog className="text-purple-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Animals
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <BiBed className="text-fuchsia-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Furniture
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <RiServiceLine className="text-pink-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Services
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <RiMentalHealthLine className="text-rose-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Beauty Health
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <MdOutlineSportsHandball className="text-orange-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Sports Fitness
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <FaBaby className="text-amber-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Baby Care
              </h2>
            </div>
          </li>
          <li className="group">
            <div className="hover:border-b-1 hover:border-gray-300 rounded flex justify-center flex-col items-center w-full h-full border shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <MdTravelExplore className="text-lime-300 text-5xl object-cover transition duration-150 ease-linear transform group-hover:scale-105" />
              <h2 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1">
                Travel
              </h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
