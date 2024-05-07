import "./MainPage.scss";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const MainPage = () => {
  console.log(new Date("2024-04-16T16:32:21.070Z").getTime())
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
