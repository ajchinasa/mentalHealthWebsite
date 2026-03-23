import { LuSearch } from "react-icons/lu";
import PositionListing from "./PositionListing";

const OpenPosition = () => {
  // const [isSearched, setIsSearched] = useState<boolean>(false);
  const positions: any[] = [
    // {
    //   role: "Project Manager",
    //   team: "Product",
    //   office: "Remote, Nigeria",
    // },
  ];
  return (
    <div className="px-5 py-10 md:py-20">
      <div className="w-full md:max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-5 w-[700px]">
          <h1 className="text-4xl font-semibold">Search Open Positions</h1>
          <p className="font-medium">
            Explore our current job openings and join a movement that&apos;s
            reshaping mental health care across Africa
          </p>
        </div>
        <div className="flex flex-col gap-10 md:gap-20 mt-10">
          <div className="w-full md:w-[400px] flex rounded-lg overflow-hidden">
            <div className="w-full bg-white px-3 flex gap-2 items-center">
              <LuSearch />
              <input
                type="text"
                className="h-full w-full outline-none"
                placeholder="Search Role"
              />
            </div>
            <button className="border-none outline-none bg-brand-primary-default text-white text-sm px-3 py-2">
              Search
            </button>
          </div>
          <PositionListing positionList={positions} isSearched={false} />
        </div>
      </div>
    </div>
  );
};

export default OpenPosition;
