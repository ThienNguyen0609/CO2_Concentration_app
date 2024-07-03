import "./NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../store/features/darkLightMode/modeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const mode = useSelector((state) => state.mode.light)
  const dispatch = useDispatch()

  const handleChangeMode = () => {
    dispatch(changeMode(!mode))
  }
  return (
    <>
      <div className={"nav-container"+(mode ? " nav-light-mode" : " nav-dark-mode")}>
        <div className="container-wrapper nav-inner" style={{height: "100%"}}>
          <div className="nav-link">
            <NavLink to={'/'} className="nav-item">Chart</NavLink>
            <NavLink to={'/CO2chart'} className="nav-item">CO2 Chart</NavLink>
            <NavLink to={'/Tem_Hum'} className="nav-item">Tem and Hum Chart</NavLink>
            <NavLink to={'/survey_data'} className="nav-item">Survey Data</NavLink>
            <NavLink to={'/data'} className="nav-item">Data</NavLink>
          </div>
          <div className="bg-mode">
            <div className="bg-mode-inner" onClick={()=>handleChangeMode()}>
              <div className={"toggle"+(mode ? " dark-toggle" : "")}>
                {mode ? <FontAwesomeIcon icon={faSun} color="#B2B2B2" /> :
                <FontAwesomeIcon icon={faMoon} color="#231B2E" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
