import { FaArrowRight } from "react-icons/fa6";
import EmptyState from "./EmptyState";

interface PositionListingProps {
  positionList: any[];
  isSearched: boolean;
}

const PositionListing: React.FC<PositionListingProps> = ({
  positionList,
  isSearched,
}) => {
  return (
    <div>
      <p className="font-semibold mb-5">
        {isSearched ? "Search Results" : "Available Positions"}
        {": "}
        {positionList.length}{" "}
        {isSearched ? "position found" : "position available"}
      </p>
      {positionList.length > 0 ? (
        <div className="rounded-[24px] bg-[#e3e3e3] p-6 flex flex-col gap-5">
          <div className="flex items-center font-bold p-5">
            <span className="w-1/2 text-left">Role</span>
            <span className="w-1/4 text-left">Team</span>
            <span className="w-1/4 text-left">Office</span>
          </div>
          {positionList.map((position) => (
            <ListRecord position={position} />
          ))}
        </div>
      ) : (
        <EmptyState isSearched={isSearched} />
      )}
    </div>
  );
};

export default PositionListing;

const ListRecord = ({ position }: { position: any }) => {
  return (
    <div
      className="flex items-center bg-white border-2 border-[#D0D8E7] p-5 rounded-3xl font-semibold hover:bg-[#d8e2f7] transition-all duration-300 cursor-pointer group"
      onClick={() => {}}
    >
      <span className="w-1/2 text-left group-hover:text-brand-primary-default transition-all duration-300">
        {position?.role}
      </span>
      <span className="w-1/4 text-left">{position?.team}</span>
      <span className="w-1/4 text-left flex items-center justify-between">
        <span>{position?.office}</span>
        <FaArrowRight className="text-brand-primary-default" />
      </span>
    </div>
  );
};
