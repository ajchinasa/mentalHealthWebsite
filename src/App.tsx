import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <div data-testid="app" className="font-sora bg-[#FFFFFF]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
