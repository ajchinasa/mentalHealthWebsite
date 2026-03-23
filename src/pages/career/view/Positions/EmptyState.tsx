import noResult from "@/assets/images/career/no-result.png";
import noVacancy from "@/assets/images/career/no-vacancy_.png";

const EmptyState = ({ isSearched }: { isSearched: boolean }) => {
  return (
    <div className="border-2 rounded-xl p-5">
      <div className="w-full md:max-w-[300px] mx-auto py-10 flex flex-col gap-3">
        <img
          src={isSearched ? noResult : noVacancy}
          alt={isSearched ? "no result found" : "no vacancy"}
          className="mx-auto"
        />
        <p className="text-center font-semibold">
          {isSearched
            ? "We couldn't find any position"
            : "We currently don't have any position available"}
        </p>
        <p className="text-center text-sm">
          {isSearched
            ? "Oop! We couldn't find a position that matched your search terms, please try changing your search."
            : "Oop! We currently don't have any available position, please check back later"}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
