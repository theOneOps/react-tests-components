export default function ModalWindow({ closeModal, country }) {
  console.log(closeModal);
  return (
    <div
      className="absolute inset-0 w-full h-full
     flex flex-col bg-gray-700 bg-opacity-80 z-30 p-4"
      onClick={(e) => e.stopPropagation()}>
      <div className="w-96 h-48 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6,flex flex-col justify-around rounded-md">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 bg-red-500 hover:bg-red-800 px-2 rounded-md">
          X
        </button>
        <div className="w-full h-full flex flex-col justify-around items-start p-4">
          <h1 className="text-lg font-light">Here is some informations about : <span className="font-semibold">{country.name.common}</span></h1>
          <h1>
            <span className="font-extralight">Languages: </span>
            <span>{Object.values(country.languages).toString()}</span>
          </h1>
          <h1>
            <span className="font-extralight">Capital: </span>
            <span>{country.capital}</span>
          </h1>
          <h1>
            <span className="font-extralight">Population: </span>
            <span>{country.population}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
