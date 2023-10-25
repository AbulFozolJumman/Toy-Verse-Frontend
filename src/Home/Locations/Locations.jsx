
const Locations = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold container mx-auto mb-12 p-2 border-s-4 border-pink-600">Our Shop Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <a href="https://www.google.com/maps/dir/Dhanmondi+%E0%A6%A7%E0%A6%BE%E0%A6%A8%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A1%E0%A6%BF/Dhanmondi,+Dhaka+1205/@23.7462226,90.3330307,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3755b8b33cffc3fb:0x4a826f475fd312af!2m2!1d90.3742307!2d23.7461495!1m5!1m1!1s0x3755b8b33cffc3fb:0x4a826f475fd312af!2m2!1d90.3742307!2d23.7461495?entry=ttu">
                <img className="cursor-pointer rounded-md border-2 border-pink-500" src="https://i.ibb.co/Jcf0xkV/Dhanmondi-6-A-Google-Maps.png" alt="Dhanmondi" />
                </a>
                <a href="https://www.google.com/maps/dir/''/Mirpur,+Dhaka/@23.8224216,90.3242204,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3755c0c1c61277db:0xc7d18838730e2e59!2m2!1d90.3654204!2d23.8223486!1m5!1m1!1s0x3755c0c1c61277db:0xc7d18838730e2e59!2m2!1d90.3654204!2d23.8223486?entry=ttu">
                <img className="cursor-pointer rounded-md border-2 border-pink-500 border border-pink-500" src="https://i.ibb.co/ChV4H5n/Mirpur-10-Google-Maps.png" alt="Mirpur" />
                </a>
                <a href="https://www.google.com/maps/dir/Jatra+Bari+%E0%A6%AF%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A6%BF/Jatra+Bari,+Dhaka/@23.7106833,90.3937092,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3755b9cc7d566d03:0x2472a49ac0504cd2!2m2!1d90.4349092!2d23.7106102!1m5!1m1!1s0x3755b9cc7d566d03:0x2472a49ac0504cd2!2m2!1d90.4349092!2d23.7106102?entry=ttu">
                <img className="cursor-pointer rounded-md border-2 border-pink-500 border border-pink-500" src="https://i.ibb.co/YtgrqZH/Uttara-Dhaka-to-Uttara-Dhaka-Google-Maps.png" alt="Uttara" />
                </a>
                <a href="https://www.google.com/maps/dir/''/Uttara,+Dhaka/@23.875532,90.3771497,16z/data=!4m13!4m12!1m5!1m1!1s0x3755c5d05e7074dd:0xd1c58803049f00c7!2m2!1d90.3795438!2d23.8758547!1m5!1m1!1s0x3755c5d05e7074dd:0xd1c58803049f00c7!2m2!1d90.3795438!2d23.8758547?entry=ttu">
                <img className="cursor-pointer rounded-md border-2 border-pink-500 border border-pink-500" src="https://i.ibb.co/dfwdfT8/Google-Maps.png" alt="Jatra Bari" />
                </a>
            </div>
        </section>
    );
};

export default Locations;