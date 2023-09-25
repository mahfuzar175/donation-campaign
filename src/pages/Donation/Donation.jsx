import { useEffect, useState } from "react";
import DonateCards from "./DonateCards/DonateCards";

const Donation = () => {
  const [donate, setDonate] = useState([]);

  const [nodatafound, setNoDataFound] = useState("");

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donate"));
    
    if(donateItems){
        setDonate(donateItems);
    }else{
        setNoDataFound("No data found!!!");
    }

  }, []);
  console.log(donate);

  return (
    <div>
        {nodatafound ? <h2 className="h-[60vh] flex justify-center items-center font-bold text-4xl">{nodatafound}</h2> : <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 lg:gap-y-2 lg:gap-x-6">
            {
                donate.map(item => <DonateCards key={item.id} item={item}></DonateCards>)
            }
        </div>}
    </div>
  );
};

export default Donation;
