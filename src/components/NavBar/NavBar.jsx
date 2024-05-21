import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../store/features/darkLightMode/modeSlice";

const NavBar = () => {
  const [lightMode, setLightMode] = useState(false)
  const mode = useSelector((state) => state.mode.light)
  const dispatch = useDispatch()
  console.log(mode)
  const handleChangeMode = () => {
    setLightMode(!lightMode)
    dispatch(changeMode(!lightMode))
  }
  return (
    <>
      <div className={"nav-container"+(lightMode ? " nav-light-mode" : " nav-dark-mode")}>
        <div className="container-wrapper nav-inner" style={{height: "100%"}}>
          <div className="nav-link">
            <NavLink to={'/'} className="nav-item">Chart</NavLink>
            <NavLink to={'/data'} className="nav-item">Data</NavLink>
          </div>
          <div className="bg-mode">
            <div className="bg-mode-inner" onClick={()=>handleChangeMode()}>
              <div className={"toggle"+(lightMode ? " dark-toggle" : "")}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
