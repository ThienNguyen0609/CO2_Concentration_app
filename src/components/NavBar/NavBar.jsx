import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="container-wrapper" style={{height: "100%"}}>
          <div className="nav-inner">
            <NavLink to={'/'} className="nav-item">Chart</NavLink>
            <NavLink to={'/data'} className="nav-item">Data</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
