import Header from "./view/Header";
import Problems from "./view/Problems";

const Challenges = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <div className="w-full md:max-w-[1200px] mx-auto mt-24 px-5">
        <Problems />
      </div>
    </div>
  );
};

export default Challenges;
