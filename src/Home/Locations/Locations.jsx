
const Locations = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold container mx-auto mb-12 p-2 border-s-4 border-pink-600">Our Shop Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <img className="cursor-pointer rounded-md border-2 border-pink-500" src="https://i.ibb.co/Jcf0xkV/Dhanmondi-6-A-Google-Maps.png" alt="Dhanmondi" />
                <img className="cursor-pointer rounded-md border-2 border-pink-500 border border-pink-500" src="https://i.ibb.co/ChV4H5n/Mirpur-10-Google-Maps.png" alt="Mirpur" />
                <img className="cursor-pointer rounded-md border-2 border-pink-500 border border-pink-500" src="https://i.ibb.co/YtgrqZH/Uttara-Dhaka-to-Uttara-Dhaka-Google-Maps.png" alt="Uttara" />
                <img className="cursor-pointer rounded-md border-2 border-pink-500 border border-pink-500" src="https://i.ibb.co/dfwdfT8/Google-Maps.png" alt="Jatra Bari" />
            </div>
        </section>
    );
};

export default Locations;