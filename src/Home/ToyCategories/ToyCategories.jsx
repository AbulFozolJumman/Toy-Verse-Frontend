import { useEffect, useState } from "react";
import "daisyui/dist/full.css";

const ToyCategories = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Marvel");
    const [selectedToy, setSelectedToy] = useState(null); // State to hold the selected toy details

    // Filter toys based on the active tab
    const filteredToys = toys.filter((toy) => toy.category === activeTab);

    const url = `https://toy-verse-server.vercel.app/toys`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error retrieving data:', error));
    }, []);

    // Function to fetch toy details by _id
    const fetchToyDetails = (id) => {
        const toyDetailsUrl = `${url}/${id}`;
        fetch(toyDetailsUrl)
            .then(res => res.json())
            .then(data => setSelectedToy(data))
            .catch(error => console.error('Error retrieving toy details:', error));
    };

    // Function to reset selected toy details
    const resetSelectedToy = () => {
        setSelectedToy(null);
    };

    return (
        <div className="container px-4 py-8 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">All Toys</h2>
            <div className="flex justify-center">
                <div className="tabs">
                    <a
                        className={`tab tab-lg tab-lifted ${activeTab === "Marvel" ? "tab-active" : ""
                            }`}
                        onClick={() => setActiveTab("Marvel")}
                    >
                        Marvel
                    </a>
                    <a
                        className={`tab tab-lg tab-lifted ${activeTab === "DC" ? "tab-active" : ""
                            }`}
                        onClick={() => setActiveTab("DC")}
                    >
                        DC
                    </a>
                    <a
                        className={`tab tab-lg tab-lifted ${activeTab === "Transformers" ? "tab-active" : ""
                            }`}
                        onClick={() => setActiveTab("Transformers")}
                    >
                        Transformers
                    </a>
                </div>
            </div> <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 flex justify-center">
                {filteredToys.map((toy, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                        <img
                            src={toy.picture}
                            alt={toy.toyName}
                            className="w-full h-[400px] rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-bold mb-2">{toy.toyName}</h3>
                        <p className="text-gray-500 mb-2">Price: ${toy.price}</p>
                        <div className="flex items-center">
                            <span className="text-gray-500 mr-1">Rating: {toy.rating}</span>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => fetchToyDetails(toy._id)}>
                                Show Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal to display selected toy details */}
            {selectedToy && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                            onClick={resetSelectedToy}
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        {/* Modal */}
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                            {selectedToy.toyName}
                                        </h3>
                                        <div className="mt-2 max-h-80 overflow-y-auto">
                                            <img src={selectedToy.picture} alt={selectedToy.toyName} className="w-full h-[400px] rounded-lg mb-4" />
                                            <p className="text-sm text-gray-500">Toy Name: {selectedToy.toyName}</p>
                                            <p className="text-sm text-gray-500">Seller Name: {selectedToy.displayName}</p>
                                            <p className="text-sm text-gray-500">Seller Email: {selectedToy.email}</p>
                                            <p className="text-sm text-gray-500">Price: ${selectedToy.price}</p>
                                            <p className="text-sm text-gray-500">Rating: {selectedToy.rating}</p>
                                            <p className="text-sm text-gray-500">Quantity: {selectedToy.quantity}</p>
                                            <p className="text-sm text-gray-500">Description: {selectedToy.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={resetSelectedToy}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ToyCategories;
