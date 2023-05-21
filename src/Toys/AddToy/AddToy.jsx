import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

// This is Add Toy Page
const AddToy = () => {
    useTitle("Add a Toy")
    const {user} = useContext(AuthContext);

    // This is Add Toy handler
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const displayName = user?.displayName;
        const email = user?.email;
        const toyName = form.toyName.value;
        const picture = form.photo.value;
        const category = form.categoryName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addToy = {
            displayName, 
            email, 
            toyName,
            picture, 
            category,
            price, 
            rating,
            quantity,
            description
        }

        console.log(addToy);

        fetch('https://toy-verse-server.vercel.app/toys', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Toy added successfully')
            }
        })

    }

    return (
        <div className="my-12">
            <div className="lg:w-1/2 mx-auto border border-[#D0D0D0] rounded-xl p-20 shadow-lg bg-gray-100">
                <form onSubmit={handleBookService}>
                    <h1 className="text-4xl font-bold mb-6">Add a Toy</h1>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Name</span>
                        </label>
                        <input type="text" readOnly name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Email</span>
                        </label>
                        <input type="text" readOnly name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Toy Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Category Name</span>
                        </label>
                        <input type="text" name="categoryName" placeholder="Category Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="lg:flex justify-between">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg font-semibold mb-1">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg font-semibold mb-1">Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Description</span>
                        </label>
                        <textarea required name="description" placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-secondary">Add Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;