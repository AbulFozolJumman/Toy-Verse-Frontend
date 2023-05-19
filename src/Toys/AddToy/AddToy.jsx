

const AddToy = () => {
    return (

        <div>
            <div className="lg:w-1/2 mx-auto border border-[#D0D0D0] rounded-xl p-20">
                <form>
                    <h1 className="text-4xl font-bold mb-6">Add a Toy</h1>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
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
                            <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
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
                        <button className="btn bg-[#FF3811] border-white">Add Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;