import { Link } from "react-router-dom";
import { FaGoogle} from 'react-icons/fa';


const Login = () => {
    return (
        <div>
            <div className="lg:w-1/2 border mx-auto border-[#D0D0D0] rounded-xl p-20">
                <form>
                    <h1 className="text-4xl font-bold mb-12">Login</h1>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Your Password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] border-white">Sign In</button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="mt-7">Or Sign In with</p>
                    <div className="flex items-center justify-center gap-4 my-7">
                        
                        <button className="text-3xl p-4 bg-[#F5F5F8] rounded-full border-0"><FaGoogle></FaGoogle></button>
                        
                    </div>
                    <p>Already have an account? <Link to='/signUp' className="text-[#FF3811] text-lg font-semibold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;