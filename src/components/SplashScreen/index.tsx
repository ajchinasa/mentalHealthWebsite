import CustomLoader from "../core/Loader/CustomLoader";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center text-white text-2xl font-bold">
      <CustomLoader variant="text" />
    </div>
  );
};

export default SplashScreen;
