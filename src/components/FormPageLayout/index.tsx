import { Outlet } from "react-router-dom";

const FormPageLayout = () => {
  return (
    <div className="h-screen w-full px-5 md:px-20 py-5 md:py-10">
      <div>
        <img src="/fnp_logo.png" alt="" />
      </div>
      <div className="my-5 md:my-10">
        <Outlet />
      </div>
      <p className="text-gray-400 text-sm">
        &copy; 2025 Friendnpal. All rights reserved.
      </p>
    </div>
  );
};

export default FormPageLayout;
