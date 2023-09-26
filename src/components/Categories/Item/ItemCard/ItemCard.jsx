import Swal from "sweetalert2";

const ItemCard = ({ item }) => {
  const {id, picture, price, title, description, category_bg} =
    item || {};

    const handleAddtoDonate = () =>{
        const addedDonateArray = [];
        const donateItems = JSON.parse(localStorage.getItem('donate'));

        if(!donateItems){
            addedDonateArray.push(item);
            localStorage.setItem('donate', JSON.stringify(addedDonateArray));
            Swal.fire(
                'Successfully Donated!',
                'You clicked the button!',
                'success'
            )
        }
        else{

            const isExists = donateItems.find(item => item.id == id);
            if(!isExists){
                addedDonateArray.push(...donateItems, item);
                localStorage.setItem('donate', JSON.stringify(addedDonateArray));
                Swal.fire(
                    'Successfully Donated!',
                    'You clicked the button!',
                    'success'
                )
            }
            else{
                Swal.fire(
                    'Error!',
                    'You already donate!',
                    'error'
                )  
            }
        }

    }

  return (
    <div>
      <div className="p-4 lg:p-0">
        <div className="relative">
          <img className="w-full rounded-md" src={picture} alt="" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8  bg-[#0B0B0B80] bg-opacity-50 rounded-b-md">
            <button onClick={handleAddtoDonate}
              style={{ backgroundColor: category_bg }}
              className="middle none center mr-4 rounded-md py-2 px-4 md:py-3 md:px-6 text-base font-semibold text-white normal-case"
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <div className="mt-6 mb-6">
          <h2 className="text-2xl md:text-4xl text-black font-bold">{title}</h2>
        </div>
        <div>
          <h2 className="text-[#0B0B0BB2]">{description}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
