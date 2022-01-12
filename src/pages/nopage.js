import React from "react";
import NilPage from "../images/404.jpg";
const NoPage = () => {
  return (
    <>
      <div className="rounded-lg ring-1 ring-gray-900 ring-opacity-5 overflow-hidden bg-white">
              <img className="sm:hidden w-full h-auto" loading="lazy" src={NilPage} alt="" width="375" height="700"/>
              <img className="w-full h-96" loading="lazy" src={NilPage} alt="" width="1280" height="700"/>
            </div>
            </>
  );
};

export default NoPage;
 