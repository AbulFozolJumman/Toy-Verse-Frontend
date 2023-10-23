/* eslint-disable react/no-unescaped-entities */
// This is Toy Donation Section

const ToyDonation = () => {
    return (
        <div className="hero min-h-screen mb-12" style={{ backgroundImage: `url("https://i.ibb.co/YfwY2fr/donate-to-toys-for-tots-3255561-01-cf95b8c8f1b1419585a3c445096988ae.jpg")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold border-pink-600 border-s-4 p-2">Hello there!</h1>
                    <p className="font-bold mb-5">Help us bring smiles to children's faces by donating toys. Your
                        generous contributions can make a difference in their lives.</p>
                    <p className="font-bold mb-4">
                        We accept new and gently used toys in good condition. Whether you have
                        outgrown toys or want to make a difference, your donation is
                        appreciated.
                    </p>
                    <p className="font-bold mb-8">
                        To donate, please visit our donation center or contact us for more
                        information.
                    </p>
                    <button className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2 rounded-md">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDonation;
