import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../Shared/Modal';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleToys, setVisibleToys] = useState(allToys.slice(0, 20));
  const [selectedToy, setSelectedToy] = useState(null);

  // Filter and limit the toys based on the search term
  const filteredToys = visibleToys.filter(toy =>
    toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Seller Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Toy Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredToys.map((toy, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{toy.displayName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.toyName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => showDetails(toy)}
                  >
                    Show Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedToy && (
        <PrivateRoute>
        <Modal onClose={closeModal}>
          <div className="flex flex-col items-center">
            <img src={selectedToy.picture} alt={selectedToy.toyName} className="w-64 h-64 object-contain" />
            <h3 className="text-xl font-bold mt-4">Toy Name: {selectedToy.toyName}</h3>
            <p className="text-gray-600">Seller Name: {selectedToy.displayName}</p>
            <p className="text-gray-600">Seller Email: {selectedToy.email}</p>
            <p className="text-gray-600">Price: ${selectedToy.price}</p>
            <p className="text-gray-600">Rating: {selectedToy.rating}</p>
            <p className="text-gray-600">Quantity: {selectedToy.quantity}</p>
            <p className="text-gray-600">Description: {selectedToy.description}</p>
          </div>
        </Modal>
        </PrivateRoute>
      )}
    </div>
  );
};

export default AllToys;
