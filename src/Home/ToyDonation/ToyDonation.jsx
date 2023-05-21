/* eslint-disable react/no-unescaped-entities */
// This is Toy Donation Section

const ToyDonation = () => {
    return (
        <div className="hero min-h-screen mb-12" style={{ backgroundImage: `url("https://www.thespruce.com/thmb/qahLNRLWfxiwZNVkkjOeUsSJbe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/donate-to-toys-for-tots-3255561_01-cf95b8c8f1b1419585a3c445096988ae.JPG")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Help us bring smiles to children's faces by donating toys. Your
                        generous contributions can make a difference in their lives.</p>
                    <p className="mb-4">
                        We accept new and gently used toys in good condition. Whether you have
                        outgrown toys or want to make a difference, your donation is
                        appreciated.
                    </p>
                    <p className="mb-8">
                        To donate, please visit our donation center or contact us for more
                        information.
                    </p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDonation;
