import Item from "./Item/Item";


const Categories = ({categories}) => {
    console.log(categories)

    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 px-4 lg:px-0 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-6">
                {
                    categories ?.map(item => <Item key={item.id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Categories;