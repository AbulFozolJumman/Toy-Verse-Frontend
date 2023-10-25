import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Shared/Modal';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import useTitle from '../../Hooks/useTitle';

// This is All Toys Page
const AllToys = () => {
  useTitle("All Toys")
  const allToys = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleToys, setVisibleToys] = useState(allToys.slice(0, 20));
  const [selectedToy, setSelectedToy] = useState(null);

  // Filter and limit the toys based on the search term
  const filteredToys = visibleToys.filter(toy =>
    toy.toyName && toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update the visible toys when the allToys array changes
  useState(() => {
    setVisibleToys(allToys.slice(0, 20));
  }, [allToys]);

  // Function to handle showing the modal and setting the selected toy
  const showDetails = (toy) => {
    setSelectedToy(toy);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedToy(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4 text-center">All Toys</h2>
      <div className="flex items-center mb-4 justify-center">
        <label htmlFor="search" className="mr-2">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
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
                                onClick={() => showDetails(toy)}>
                                Show Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

      {/* Modal */}
      {selectedToy && (
        <PrivateRoute>
        <Modal onClose={closeModal}>
          <div className="flex flex-col md:flex-row items-center">
            <img src={selectedToy.picture} alt={selectedToy.toyName} className="w-64 h-64 object-contain" />
            <div>
            <h3 className="text-xl font-bold mt-4">Toy Name: {selectedToy.toyName}</h3>
            <p className="text-gray-600">Seller Name: {selectedToy.displayName}</p>
            <p className="text-gray-600">Seller Email: {selectedToy.email}</p>
            <p className="text-gray-600">Price: ${selectedToy.price}</p>
            <p className="text-gray-600">Rating: {selectedToy.rating}</p>
            <p className="text-gray-600">Quantity: {selectedToy.quantity}</p>
            <p className="text-gray-600">Description: {selectedToy.description}</p>
            </div>
          </div>
        </Modal>
        </PrivateRoute>
      )}
    </div>
  );
};

export default AllToys;
