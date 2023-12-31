import React from "react";
import { Link } from "react-router-dom";
import UseFetchData from "../hooks/useFetchData";
import CinemaRoom from "./CinemaRoom";
import CinemaRoomSkeleton from "../skeletons/CinemaRoomSkeleton";
import CinemaCardSkeleton from "../skeletons/CinemaCardSkeleton";
const fetchUrl = "/Tbl_CinemaList";
const queryKey = ["cinemas"];
const CinemaCard = () => {
  const cinemas = Array(4).fill("Cinema ");
  const { isLoading, isError, error, data } = UseFetchData(queryKey, fetchUrl);
  return (
    <>
      {isLoading &&
        Array(3)
          .fill()
          .map((_, index) => <CinemaCardSkeleton key={index} />)}

      {data &&
        data.map((d) => (
          <div className="h-[240px] flex justify-center items-center ">
            <div className="h-[90%] w-[95%] bg-gradient-to-r from-gray-900 to-gray-850 p-4 rounded-lg shadow-custom shadow-slate-700 flex">
              <div className="w-[40%]">
                <div className="overflow-hidden min-w-[95%] max-w-[95%] min-h-[100%] max-h-[100%] rounded-lg shadow-sm shadow-slate-700">
                  <img
                    className="min-h-[100%] max-h-[100%] min-w-[100%] max-w-[100%] object-cover rounded-lg 
              
              hover:scale-105 duration-500 transition-all ease-in-out "
                    src="https://media.istockphoto.com/id/1440627430/photo/private-luxury-home-cinema-room.jpg?s=612x612&w=0&k=20&c=UMkArjW6KVCNEHQlMtLoCwpStbp7YK_I-nFbOJ77gy8="
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="pb-2 border-red-600 border-b-2 flex gap-3 items-center w-fit">
                  <span className="text-xl">{d.CinemaName}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                </div>
                <CinemaRoom cinemaId={d.CinemaId} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CinemaCard;
