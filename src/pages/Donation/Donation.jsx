import { useEffect, useState } from "react";
import DonateCards from "./DonateCards/DonateCards";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [nodatafound, setNoDataFound] = useState("");

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donate"));
    
    if (donateItems) {
      setDonate(donateItems);
    } else {
      setNoDataFound("No data found!!!");
    }
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {nodatafound ? (
        <h2 className="h-[60vh] flex justify-center items-center font-bold text-4xl">{nodatafound}</h2>
      ) : (
        <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 lg:gap-y-2 lg:gap-x-6">
          {showAll
            ? donate.map((item) => <DonateCards key={item.id} item={item}></DonateCards>)
            : donate.slice(0, 4).map((item) => <DonateCards key={item.id} item={item}></DonateCards>)}
        </div>
      )}

      {donate.length > 4 && (
        <button
          className="mt-4 mx-auto block bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          onClick={toggleShowAll}
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      )}
    </div>
  );
};

export default Donation;
