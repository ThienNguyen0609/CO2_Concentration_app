import "./MainPage.scss";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToData } from "../store/features/data/dataSlice";
import { postConcentration } from "../services/concentration";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = new WebSocket("ws://192.168.1.21:80/ws")
    socket.onopen = (event) => {
      setInterval(() => {
        socket.send("get data");
      }, 5000)
    };
    socket.onmessage = async (event) => {
      const response = JSON.parse(event.data)
      dispatch(addToData({
        ...response,
        createAt: Date.now()
      }))
      await postConcentration(response)
    };
    //clean up function
    return () => socket.close();
  }, [])
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
