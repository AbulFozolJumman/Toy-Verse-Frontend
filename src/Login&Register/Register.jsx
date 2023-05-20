import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../Hooks/useTitle";

const Register = () => {
    useTitle("Register")
    const [error, setError] = useState("");
    const { userSignUp, updateUserProfile, googleSignIn, setReload } = useContext(AuthContext)

    const handleUserSignUp = event => {
        event.preventDefault()
        setError("")
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        userSignUp(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photo).then(()=>
                    setReload(true)
                ).catch(error => {
                    setError(error.message);
                })
                form.reset()
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        setError("")
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="lg:w-1/2 mx-auto border border-[#D0D0D0] rounded-xl p-20">
                <form onSubmit={handleUserSignUp}>
                    <h1 className="text-4xl font-bold mb-12">Sign Up</h1>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered"  required/>
                    </div>
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered"  required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] border-white">Sign Up</button>
                    </div>
                    <p className="text-red-500 mt-5">{error}</p>
                </form>
                <div className="text-center">
                    <p className="mt-7">Or Sign Up with</p>
                    <div className="flex items-center justify-center gap-4 my-7">
                        <button onClick={handleGoogleSignIn} className="text-3xl p-4 bg-[#F5F5F8] rounded-full border-0"><FaGoogle></FaGoogle></button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="text-[#FF3811] text-lg font-semibold">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;