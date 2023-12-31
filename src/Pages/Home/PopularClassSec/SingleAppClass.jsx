const SingleAppClass = ({ appClass }) => {
  const { classNameSpe, classImg, instructorName, price, seats } = appClass;
  return (
    <div className="max-w-xs mx-auto shadow-xl rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={classImg}
        alt={classNameSpe}
      />

      <div className="p-4">
        <h2 className=" text-2xl font-semibold">{classNameSpe}</h2>
        <p className="mt-1  font-bold">{instructorName}</p>

        <div className="mt-4 flex items-center">
          <span className="text-green-600 font-semibold text-lg">${price}</span>
          <span className="ml-2 text-sm">Per Seat</span>
        </div>

        <div className="mt-2 flex items-center">
          <span className="text-blue-600 font-semibold text-lg">{seats}</span>
          <span className="ml-2 text-sm">Seats Available</span>
        </div>
      </div>
    </div>
  );
};

export default SingleAppClass;
