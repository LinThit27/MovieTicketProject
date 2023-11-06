import React from "react";

const SeatNavbar = () => {
  return (
    <div className="mt-8 flex h-[160px] justify-between w-[85%] mx-auto">
      <div className="flex gap-3 w-full">
        <img
          className="object-cover min-h-[120%] min-w-[18%] max-h-[120%] 
    hover:scale-[1.02] transition-all duration-700 rounded-lg shadow-custom shadow-slate-600"
          src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
        />
        <div className="w-full flex flex-col gap-3 p-4">
          <span>Movie Title</span>
          <span>Blah Blah Cinema</span>
          <span>Blah Blah Room</span>
        </div>
      </div>
      <div className=" h-full ">
        <div className=" mb-1 pb-2 border-gray-900 border-b-2 w-[60%]">
          <p className=" inline ">Show Time : </p>
          <select className="p-1 ml-2 mt-2 w-44 rounded-lg text-gray-950 focus:ring-blue-500 outline-none">
            <option value="#" selected>
              02-11-2023
            </option>
          </select>
        </div>
        <div className="p-2 mb-2 flex gap-6 border-gray-900 border-b-2 min-w-[60%] max-w-[60%]">
          <span className="border-red-600 border-b-4">10:30</span>
          <span className="border-white border-opacity-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-opacity-100">
            12:30
          </span>
          <span className="border-white border-opacity-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-opacity-100">
            15:30
          </span>
          <span className="border-white border-opacity-0 hover:border-b-2 transition-all duration-300 ease-in-out hover:border-opacity-100">
            18:30
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeatNavbar;
