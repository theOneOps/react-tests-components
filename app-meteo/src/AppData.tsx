import useGetData from "./useGetData";
import Loading from "./assets/loading.svg";
import Country from "./assets/Country";

export default function AppData() {
  const { loading, error, content } = useGetData();

  if (loading) return <img src={Loading} alt="" className="w-96 h-96" />;
  else if (error) return <p>There is an error</p>;
  else
    return (
      <div className="w-fill h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 relative p-4">
        {content?.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    );
}
