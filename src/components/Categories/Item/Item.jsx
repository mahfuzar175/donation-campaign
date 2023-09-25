const Item = ({item}) => {

const {picture, category, title, category_bg, card_bg} = item || {}
  return (
    <div>
      <div style={{backgroundColor:card_bg}} className="card bg-base-100 rounded-md shadow-lg">
        <figure>
          <img className="w-full" src={picture} alt="img" />
        </figure>
        <div className="card-body">
          <h2 style={{backgroundColor:card_bg, color:category_bg}} className="badge badge-secondary p-3 font-medium rounded border-none">{category}</h2>
          <div>
            <h2 style={{color:category_bg}} className="font-bold text-lg">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;