


const AllToyCard = ({toy}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-[400px] rounded-lg" src={toy.picture} alt={toy.toyName} />
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2">{toy.toyName}</h3>
        <p className="text-sm mb-2">{toy.description}</p>
        <div className="flex items-center mb-2">
          <span>Rating:</span>
          <div className="flex items-center ml-2">
            <svg
              className="h-5 w-5 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 14.878l-4.472 2.166 1.078-4.973L1.146 7.732l5.28-.456L10 2l2.574 5.276 5.28.456-4.46 4.339 1.078 4.973L10 14.879z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1">{toy.rating}</span>
          </div>
        </div>
        <div className="mb-2">
          <span>Display Name:</span>
          <span className="ml-1">{toy.displayName}</span>
        </div>
        <div className="mb-4">
          <span>Email:</span>
          <span className="ml-1">{toy.email}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-indigo-500">${toy.price}</div>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded">
            Show Details
          </button>
        </div>
      </div>
    </div>
    );
};

export default AllToyCard;