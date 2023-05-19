import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    const url = `http://localhost:5000/toys?email=${user?.email}`;
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

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-4 text-center">My Toys</h2>
            <div className="flex justify-center mb-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={sortToys}
                >
                    Sort: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">

                    <thead className="bg-gray-100">
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
                    <tbody className="bg-white divide-y divide-gray-200">
                        {myToys.map((toy, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Update
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
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
        </div>
    );
};

export default MyToys;