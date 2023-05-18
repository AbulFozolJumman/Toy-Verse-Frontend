import { Link } from "react-router-dom";
import { FaGoogle} from 'react-icons/fa';


const Register = () => {
    return (
        <div>

            <div className="lg:w-1/2 mx-auto border border-[#D0D0D0] rounded-xl p-20">
                <form>
                    <h1 className="text-4xl font-bold mb-12">Sign Up</h1>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] border-white">Sign Up</button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="mt-7">Or Sign Up with</p>
                    <div className="flex items-center justify-center gap-4 my-7">
                        
                        <button className="text-3xl p-4 bg-[#F5F5F8] rounded-full border-0"><FaGoogle></FaGoogle></button>
                        
                    </div>
                    <p>Already have an account? <Link to='/login' className="text-[#FF3811] text-lg font-semibold">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;