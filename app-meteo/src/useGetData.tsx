import { useEffect, useState } from "react";

export default function useGetData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,languages,flags"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        console.log(res);

        setData(res);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { loading, error, content:data };
}
