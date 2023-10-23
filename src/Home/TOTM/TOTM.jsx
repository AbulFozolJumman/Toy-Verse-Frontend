

const TOTM = () => {
  return (
    // <div className="bg-gradient-to-br from-red-600 to-yellow-400 text-white p-8 mb-12 shadow-lg">
    //   <h2 className="text-3xl font-bold mb-4">Toy of the Month</h2>
    //   <div className="flex justify-center items-center">
    //     <img
    //       src=""
    //       alt="Toy of the Month"
    //       className="w-64 h-64 object-cover rounded-lg shadow-lg"
    //     />
    //   </div>
    //   <p className="text-lg mt-4">
    //     This month, we are featuring the incredible ToyX! With its interactive
    //     features and vibrant colors, it&#39;s the perfect toy for sparking
    //     imagination and creativity in children of all ages.
    //   </p>
    //   <button className="mt-6 px-6 py-3 rounded-lg bg-red-600 hover:bg-yellow-400 hover:text-red-600 text-yellow-400 font-bold">
    //     Learn More
    //   </button>
    // </div>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/thyvhzz/totm.webp" className="max-w-sm rounded-md shadow-pink-500 shadow-md" />
    <div>
      <h1 className="text-5xl font-bold">Toy of the Month</h1>
      <p className="py-6">This month, we are featuring the incredible ToyX! With its interactive
        features and vibrant colors, it&#39;s the perfect toy for sparking
        imagination and creativity in children of all ages.</p>
      <button className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2 rounded-md">Learn More</button>
    </div>
  </div>
</div>
  );
};

export default TOTM;
