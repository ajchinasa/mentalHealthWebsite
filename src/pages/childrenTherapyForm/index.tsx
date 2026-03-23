import Welcome from "./view/Welcome";

const ChildrenTherapyForm = () => {
  // const [viewIndex, setViewIndex] = useState<number>(0);
  const StepsComponents = [<Welcome />];
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white px-5 py-8 rounded-2xl">
      {StepsComponents[0]}
    </div>
  );
};

export default ChildrenTherapyForm;
