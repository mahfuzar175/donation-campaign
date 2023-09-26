import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const categories = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState(categories);

  const handleSearch = () => {
    const filtered = categories.filter((item) =>
      item.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );

    setFilteredData(filtered);
  }

  return (
    <div>
      <Banner
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleSearch={handleSearch}
      ></Banner>
      <Categories categories={filteredData}></Categories>
    </div>
  );
};

export default Home;
