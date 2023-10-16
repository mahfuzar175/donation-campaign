import React from "react";

const Banner = ({ selectedCategory, setSelectedCategory, handleSearch }) => {
  return (
    <div className="relative h-[70vh]">
      <img
        src="https://i.ibb.co/TTpRLq7/Rectangle-4281.png"
        alt="Banner Background"
        className="w-full h-full object-cover absolute inset-0 opacity-10"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-8 text-black">
          I Grow By Helping People In Need
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l-md border outline-none text-black"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-md focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
