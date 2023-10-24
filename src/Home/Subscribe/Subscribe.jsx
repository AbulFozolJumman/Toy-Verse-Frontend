const Subscribe = () => {
    return (
        <div className="hero min-h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:pr-12">
                    <h1 className="text-5xl font-bold">Subscribe for our new arrival !!!</h1>
                    <p className="py-6">By subscribing, you will receive timely updates about the new arrivals at Toy Zone.Subscribers often receive exclusive offers, promotions, and discounts. Toy Zone may offer special deals to their subscribers, giving you the opportunity to snag new toys at discounted prices or enjoy other perks not available to non-subscribers. This can help you save money and make your toy shopping experience even more rewarding.</p>
                    <input className="h-[40px] w-[50%] outline-pink-500" type="email" name="" id="" />
                    <button className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2">Subscribe</button>
                </div>
                <img src="https://i.ibb.co/xGVv8Dh/new-arrival.png" className="max-w-sm rounded-md" />
            </div>
        </div>
    );
};

export default Subscribe;