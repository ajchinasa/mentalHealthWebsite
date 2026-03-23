import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { cleanUpPackages, type RefinedType } from "@/utils/cleanUpPackages";
import { instaceWithoutAuth } from "@/services/axios-instance";

type QueryResult = {
  location: string;
  packages: RefinedType[];
};

const fetchLocationAndPackages = async (): Promise<QueryResult> => {
  // Default location
  let location = "Others";

  // Get location
  try {
    const response = await axios.get("https://get.geojs.io/v1/ip/geo.json");
    if (response.data?.country) {
      location = response.data.country;
    }
  } catch (err: any) {
    console.error("GeoJS failed:", err.message);
  }

  // Get packages
  const pkgResponse = await instaceWithoutAuth.get("/package");
  const filteredPackages = pkgResponse?.data?.packages?.filter(
    (each: any) => each?.type !== "Organizations",
  );

  const refinedPackages = cleanUpPackages(filteredPackages, location);

  return {
    location,
    packages: refinedPackages,
  };
};

const useGetLocationAndPackages = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["location-and-packages"],
    queryFn: fetchLocationAndPackages,
    staleTime: 1000 * 60 * 5, // optional: cache for 5 minutes
  });

  return {
    location: data?.location ?? "Others",
    packages: data?.packages ?? [],
    isLoading,
    isError,
    error,
  };
};

export default useGetLocationAndPackages;
