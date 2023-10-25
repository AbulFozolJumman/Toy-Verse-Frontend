import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const DonateAToy = () => {
    useTitle("Donate a Toy")
    const { user } = useContext(AuthContext);
    const [showToast, setShowToast] = useState(false);
    const [clear, setClear] = useState('');
    const [clear0, setClear0] = useState('');
    const [clear1, setClear1] = useState('');
    const [clear2, setClear2] = useState('');

    // This is Add Toy handler
    const handleBookService = event => {
        event.preventDefault();
        setClear('');
        setClear0('');
        setClear1('');
        setClear2('');
        setShowToast(true);
    }

    return (
        <div className="my-12">
            <div className="lg:w-1/2 mx-auto border border-[#D0D0D0] rounded-md p-10 shadow-md shadow-pink-500 bg-gray-100">
                <form onSubmit={handleBookService}>
                    <h1 className="text-4xl font-bold mb-6">Donate a Toy</h1>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Name</span>
                        </label>
                        <input type="text" readOnly name="name" defaultValue={user?.displayName} placeholder="Your Name" className="h-10 pl-3 outline-pink-500 rounded-md" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Email</span>
                        </label>
                        <input type="text" readOnly name="email" defaultValue={user?.email} placeholder="Your Email" className="h-10 pl-3 outline-pink-500 rounded-md" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Toy Name</span>
                        </label>
                        <input onChange={(e) => setClear(e.target.value)} value={clear} type="text" name="toyName" placeholder="Toy Name" className="h-10 pl-3 outline-pink-500 rounded-md" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Toy Photo URL</span>
                        </label>
                        <input onChange={(e) => setClear0(e.target.value)} value={clear0} type="text" name="photo" placeholder="Photo-URL" className="h-10 pl-3 outline-pink-500 rounded-md" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Category Name</span>
                        </label>
                        <input onChange={(e) => setClear1(e.target.value)} value={clear1} type="text" name="categoryName" placeholder="Category Name" className="h-10 pl-3 outline-pink-500 rounded-md" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Description</span>
                        </label>
                        <textarea onChange={(e) => setClear2(e.target.value)} value={clear2} required name="description" placeholder="Description" className="w-full h-20 pl-3 pt-3 outline-pink-500 rounded-md" ></textarea>
                    </div>
                    <div className="form-control mt-5">
                        <button className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2 rounded-md">Add Now</button>
                    </div>
                </form>

                {showToast && (
                    <div className="p-8 space-y-4">
                        <div className="flex w-96 shadow-lg rounded-lg">
                            <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white fill-current" viewBox="0 0 16 16" width="20" height="20"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                            </div>
                            <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                                <div>Donation successful and Thank you</div>
                                <button onClick={() => setShowToast(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default DonateAToy;