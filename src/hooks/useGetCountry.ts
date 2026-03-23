import axios from "axios";
import { useEffect, useState } from "react";

const useGetCountry = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      axios("https://restcountries.com/v3.1/all?fields=name,flags,idd")
        .then((res) => {
          setCountries(res?.data);
        })
        .catch((err) => console.log(err));
    };
    fetchCountry();
  }, []);

  return { loading, countries };
};

export default useGetCountry;
