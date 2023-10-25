import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

// This is My Toy Page
const MyToys = () => {
  useTitle("My Toys")
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedToy, setSelectedToy] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [updateForm, setUpdateForm] = useState({
    toyName: '',
    category: '',
    price: '',
    quantity: '',
    rating: '',
    description: '',
  });

  const url = `https://toy-verse-server.vercel.app/toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setMyToys(data))
      .catch(error => console.error('Error retrieving data:', error));
  }, [url]);

  // Sort the toys based on price
  const sortToys = () => {
    const sortedToys = [...myToys].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setMyToys(sortedToys);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Delete Toy from My Toys by id
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`https://toy-verse-server.vercel.app/toys/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted successfully');
            const remaining = myToys.filter(toy => toy._id !== id);
            setMyToys(remaining);
          }
        })
    }
  }

  // Open the modal and set the selected toy for editing
  const openModal = (toy) => {
    setSelectedToy(toy);
    setUpdateForm({
      toyName: toy.toyName,
      category: toy.category,
      price: toy.price,
      quantity: toy.quantity,
      rating: toy.rating,
      description: toy.description,
    });
    setModalOpen(true);
  };

  // Update the toy data
  const handleUpdate = (event) => {
    event.preventDefault();
    const id = selectedToy._id;
    fetch(`https://toy-verse-server.vercel.app/toys/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateForm)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('Toy Updated successfully');
          // Update the toy in the myToys state
          const updatedToys = myToys.map(toy => {
            if (toy._id === id) {
              return {
                ...toy,
                ...updateForm
              };
            }
            return toy;
          });
          setMyToys(updatedToys);
          closeModal();
        }
      })
  };

  // Close the modal
  const closeModal = () => {
    setSelectedToy(null);
    setUpdateForm({
      toyName: '',
      category: '',
      price: '',
      quantity: '',
      rating: '',
      description: '',
    });
    setModalOpen(false);
  };

  return (
    <div className="container min-h-[80vh] mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4 text-center">My Toys</h2>
      <div className="flex justify-center mb-4">
        <button
          className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2 rounded-md"
          onClick={sortToys}
        >
          Sort: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-300">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Toy Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Picture</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Rating</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody className="bg-green-100 divide-y divide-gray-200">
            {myToys.map((toy, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => openModal(toy)}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.toyName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={toy.picture} alt={toy.toyName} className="w-16 h-16 rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.rating}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

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
                      Update Toy
                    </h3>
                    <div className="mt-4">
                      <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                          <label htmlFor="toyName" className="block text-sm font-medium text-gray-700">
                            Toy Name
                          </label>
                          <input
                            type="text"
                            name="toyName"
                            id="toyName"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={updateForm.toyName}
                            onChange={e => setUpdateForm({ ...updateForm, toyName: e.target.value })}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                          </label>
                          <input
                            type="text"
                            name="category"
                            id="category"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={updateForm.category}
                            onChange={e => setUpdateForm({ ...updateForm, category: e.target.value })}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                          </label>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={updateForm.price}
                            onChange={e => setUpdateForm({ ...updateForm, price: e.target.value })}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Quantity
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            id="quantity"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={updateForm.quantity}
                            onChange={e => setUpdateForm({ ...updateForm, quantity: e.target.value })}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                            Rating
                          </label>
                          <input
                            type="text"
                            name="rating"
                            id="rating"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={updateForm.rating}
                            onChange={e => setUpdateForm({ ...updateForm, rating: e.target.value })}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                          </label>
                          <textarea
                            name="description"
                            id="description"
                            rows="3"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={updateForm.description}
                            onChange={e => setUpdateForm({ ...updateForm, description: e.target.value })}
                          ></textarea>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="w-full btn btn-secondary inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Update
                          </button>
                          <button
                            onClick={closeModal}
                            type="button"
                            className="btn"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
