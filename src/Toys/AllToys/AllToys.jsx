import { useLoaderData } from "react-router-dom";
import AllToyCard from "./AllToyCard";


const AllToys = () => {
    const allToys = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto my-8">
            <h1 className="text-4xl text-center font-bold mb-12">All Toys</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {allToys?.map((toy, index) => (
                    <AllToyCard key={index} toy={toy}></AllToyCard>
                ))}
            </div>
        </div>
    );
};

export default AllToys;