import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="text-6xl font-bold mb-4">Opps!!!</h2>
            {/* <Link to='/'>Go back to Home</Link> */}
            <h2 className="text-4xl font-medium">Go back to <Link className="text-red-500 underline" to='/'>Home</Link></h2>
            
        </div>
    );
};

export default ErrorPage;