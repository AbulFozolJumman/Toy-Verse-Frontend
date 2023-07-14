

const TOTM = () => {
  return (
    <div className="bg-gradient-to-br from-red-600 to-yellow-400 text-white p-8 rounded-lg mb-12 shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Toy of the Month</h2>
      <div className="flex justify-center items-center">
        <img
          src="https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_US%2FCABCF6C6A2714FC593973D9DF41C290D%2Fd2684c79e1ac7cb00f09fbade32a2a7df88bb421.jpg&w=3840&q=75"
          alt="Toy of the Month"
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg mt-4">
        This month, we are featuring the incredible ToyX! With its interactive
        features and vibrant colors, it&#39;s the perfect toy for sparking
        imagination and creativity in children of all ages.
      </p>
      <button className="mt-6 px-6 py-3 rounded-lg bg-red-600 hover:bg-yellow-400 hover:text-red-600 text-yellow-400 font-bold">
        Learn More
      </button>
    </div>
  );
};

export default TOTM;
