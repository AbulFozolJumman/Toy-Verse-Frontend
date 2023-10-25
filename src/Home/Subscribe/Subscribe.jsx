import { useState } from "react";

const Subscribe = () => {
    const [showToast, setShowToast] = useState(false);
    const [email, setEmail] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setShowToast(true);
    };

    return (
        <div className="hero min-h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:pr-12">
                    <h1 className="text-5xl font-bold">Subscribe for our new arrival !!!</h1>
                    <p className="py-6">By subscribing, you will receive timely updates about the new arrivals at Toy Zone.Subscribers often receive exclusive offers, promotions, and discounts. Toy Zone may offer special deals to their subscribers, giving you the opportunity to snag new toys at discounted prices or enjoy other perks not available to non-subscribers. This can help you save money and make your toy shopping experience even more rewarding.</p>
                    <form onSubmit={handleOnSubmit}>
                        <input required className="h-[40px] w-[50%] outline-pink-500 pl-5" type="email" name="" id="" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email" />
                        <button className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2">Subscribe</button>
                    </form>
                    {showToast && (
                        <div className="p-8 space-y-4">
                            <div className="flex w-96 shadow-lg rounded-lg">
                                <div className="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white fill-current" viewBox="0 0 16 16" width="20" height="20"><path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                                </div>
                                <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                                    <div>Congrats! You are now a Subscriber</div>
                                    <button onClick={() => setShowToast(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <img src="https://i.ibb.co/xGVv8Dh/new-arrival.png" className="max-w-sm rounded-md" />
            </div>
        </div>
    );
};

export default Subscribe;