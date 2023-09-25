const DonateCards = ({ item }) => {
  const {
    picture,
    category,
    price,
    title,
    card_bg,
    category_bg,
  } = item || {};

  return (
    <div>
      <div style={{backgroundColor:card_bg}} className="md:w-full md:flex gap-8 my-4 rounded-md">
        <div>
          <img className="w-full" src={picture} alt="" />
        </div>
        <div className="mt-4">
          <div className="ml-4 md:ml-0">
          <h2
            style={{ backgroundColor: card_bg, color: category_bg }}
            className="badge badge-secondary p-3 font-medium rounded border-none"
          >
            {category}
          </h2>
          <h2 className="font-bold text-lg mt-2 mb-2">
            {title}
          </h2>
          <h2 style={{color: category_bg}} className="text-lg font-semibold mb-2">$ {price}</h2>
          </div>
          <div>
          <button
              style={{ backgroundColor: category_bg }}
              className="w-full md:w-[150px] middle none center mr-4 md:rounded-md py-2 px-4 md:py-2 md:px-4 text-base font-semibold text-white normal-case"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateCards;
