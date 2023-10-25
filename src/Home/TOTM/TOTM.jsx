import React from 'react';

const TOTM = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://i.ibb.co/thyvhzz/totm.webp" className="max-w-sm rounded-md shadow-pink-500 shadow-md" />
          <div>
            <h1 className="text-5xl font-bold">Toy of the Month</h1>
            <p className="py-6">This month, we are featuring the incredible ToyX! With its interactive
              features and vibrant colors, it&#39;s the perfect toy for sparking
              imagination and creativity in children of all ages.</p>
            <button onClick={() => setShowModal(true)} className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-4 py-2 rounded-md">Learn More</button>
          </div>
        </div>
      </div>


      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-pink-500 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Toy of the month
                  </h3>
                  <button
                    className="bg-pink-500 hover:bg-pink-400 text-white hover:text-pink-800 font-bold px-3 py-1 rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <div className="p-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    <img src="https://i.ibb.co/thyvhzz/totm.webp" alt="TOTM" className="rounded-md" />
                    <div>
                      <p className="text-sm text-gray-500"><span className="font-bold">Toy Name:</span> Iron Man</p>
                      <p className="text-sm text-gray-500"><span className="font-bold">Seller Name:</span> Jumman</p>
                      <p className="text-sm text-gray-500"><span className="font-bold">Seller Email:</span> abulfozoljumman@gmail.com</p>
                      <p className="text-sm text-gray-500"><span className="font-bold">Price:</span> $20</p>
                      <p className="text-sm text-gray-500"><span className="font-bold">Rating:</span> 4.5</p>
                      <p className="text-sm text-gray-500"><span className="font-bold">Quantity:</span> 7</p>
                      <p className="text-sm text-gray-500"><span className="font-bold">Description:</span> Bring home the armored Avenger with this Iron Man action figure. Perfect for Marvel fans!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default TOTM;