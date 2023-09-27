import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const categories = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(categories);

  const handleSearch = () => {
    const filtered = categories.filter((item) =>
      item.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      <Banner
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleSearch={handleSearch}
      />
      {filteredData.length === 0 ? (
        <p className="mt-4 text-center text-base md:text-2xl font-bold">No matching categories found!!!</p>
      ) : (
        <Categories categories={filteredData} />
      )}
    </div>
  );
};

export default Home;
