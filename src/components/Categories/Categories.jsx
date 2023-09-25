import Item from "./Item/Item";


const Categories = ({categories}) => {
    console.log(categories)

    return (
        <div className="py-4 mt-4">
            <div className=" grid grid-cols-1 p-2 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-6">
                {
                    // categories ?.map(category => <Category key={category.id} category={category}></Category>)
                    categories ?.map(item => <Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Categories;