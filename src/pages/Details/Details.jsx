import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ItemCard from "../../components/Categories/Item/ItemCard/ItemCard";

const Details = () => {
  const [item, setitem] = useState();
  const { id } = useParams();
  const categories = useLoaderData();

  useEffect(() => {
    const findItem = categories?.find((item) => item.id == id);
    setitem(findItem);
  }, [id, categories]);

  console.log(item);
  

  return (
    <div>
      <ItemCard item={item}></ItemCard>
    </div>
  );
};

export default Details;
