const Instructor = ({ instructor }) => {
  const { name, email, photo } = instructor;

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-[#EE9322] text-white rounded-lg shadow-xl p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={photo}
          alt={name}
          className="w-28 h-24 rounded-full mr-4 border-4 border-white"
        />
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-lg">{email}</p>
        </div>
      </div>
      <button className="bg-[#9875ff] hover:bg-[#8b64fd] text-white font-semibold py-2 px-4 rounded-full transform hover:scale-105 transition-transform duration-300">
        Details
      </button>
    </div>
  );
};

export default Instructor;
