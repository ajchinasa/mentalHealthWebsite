import { useEffect, useState } from "react";
import useGetLocationAndPackages from "./useGetLocationAndPackages";

const useTherapylogic = () => {
  const { location, packages } = useGetLocationAndPackages();
  const [categories, setCategories] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(categories?.[0] || "");

  useEffect(() => {
    if (packages?.length > 0) {
      const filteredCategory = packages
        .filter((each: any) => each.type !== "Organizations")
        .map((each: any) => each.type);

      setCategories(filteredCategory);
      setActiveTab(filteredCategory[0]);
    }
  }, [packages]);

  const formatPackages = () => {
    if (packages?.length > 0) {
      const filteredData = packages.filter(
        (each: any) => each.type !== "Organizations",
      );

      const packagesObject: { [key: string]: any } = {};

      filteredData.forEach((each: any) => {
        packagesObject[each.type as string] = each.packages;
      });

      return packagesObject;
    }
  };

  return {
    categories,
    activeTab,
    setActiveTab,
    therapyPackages: formatPackages(),
    location,
  };
};

export default useTherapylogic;
