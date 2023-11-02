import React from "react";
import { Link } from "react-router-dom";

const MovieCard = () => {
  return (
    <>
      <Link to="/movie/id">
        <div
          className="relative bg-gray-950 rounded-lg min-h-[350px] max-h-[350px] overflow-hidden
      min-w-[260px] max-w-[260px]
     shadow-md shadow-slate-800 hover:scale-[1.03] transition-all duration-500 ease-in-out
      cursor-pointer text-center text-white group"
        >
          <img
            className="object-cover min-h-[100%] min-w-full max-h-[100%] 
            hover:scale-[1.02] transition-all duration-700 "
            src="https://media.istockphoto.com/id/1213550611/photo/spaceman-in-the-surf.jpg?s=612x612&w=0&k=20&c=GP0HIuD4wXBdMXk-Oa8Fc9Z8J0BazUZ0l7s7ps69ajI="
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 absolute top-3 right-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out hover:scale-105"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <h2 className="text-center mt-2 cursor-pointer">Movie Name</h2>
      </Link>
    </>
  );
};

export default MovieCard;
