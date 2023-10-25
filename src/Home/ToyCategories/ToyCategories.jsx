import { useEffect, useState } from "react";
import "daisyui/dist/full.css";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

// This is Category Section
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
    }, [url]);

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
            <h2 className="text-4xl font-bold mb-4 p-2 border-s-4 border-pink-600">Browse by Category</h2>
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
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 flex justify-center">
                {filteredToys.map((toy, index) => (
                    <div key={index} className="rounded-md shadow-pink-500 shadow-md p-4">
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
                            <button className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2 rounded-md"
                                onClick={() => fetchToyDetails(toy._id)}>
                                Show Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal to display selected toy details */}
            {selectedToy && (
                <PrivateRoute>
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
                                className="inline-block align-bottom bg-white rounded-md border border-pink-500 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div className="bg-white border-b border-pink-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                            <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-headline">
                                                {selectedToy.toyName}
                                            </h3>
                                            <div className="pt-5 max-h-80 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <img src={selectedToy.picture} alt={selectedToy.toyName} className="w-full rounded-lg mb-4" />
                                                <div>
                                                    <p className="text-sm text-gray-500"><span className="font-bold">Seller Name:</span> {selectedToy.displayName}</p>
                                                    <p className="text-sm text-gray-500"><span className="font-bold">Seller Email:</span> {selectedToy.email}</p>
                                                    <p className="text-sm text-gray-500"><span className="font-bold">Price:</span> ${selectedToy.price}</p>
                                                    <p className="text-sm text-gray-500"><span className="font-bold">Rating:</span> {selectedToy.rating}</p>
                                                    <p className="text-sm text-gray-500"><span className="font-bold">Quantity:</span> {selectedToy.quantity}</p>
                                                    <p className="text-sm text-gray-500"><span className="font-bold">Description:</span> {selectedToy.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2 rounded-md"
                                        onClick={resetSelectedToy}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </PrivateRoute>
            )}

        </div>
    );
};

export default ToyCategories;
