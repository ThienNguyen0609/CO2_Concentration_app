import "./MainPage.scss";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const MainPage = () => {
  return (
    <>
      <div className="mp-container">
        <NavBar />
        <div className="container-wrapper">
          <div className="mp-inner">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
