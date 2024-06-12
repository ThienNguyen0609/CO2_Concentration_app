import "./MainPage.scss";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToData } from "../store/features/data/dataSlice";
import { postConcentration } from "../services/concentration";

const MainPage = () => {
  const [flag, setFlag] = useState(true)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const socket = new WebSocket("ws://192.168.1.22:80/ws")
  //   let timeout;
  //   socket.onopen = (event) => {
  //     setInterval(() => {
  //       socket.send("get");
  //       setFlag(false);
  //       timeout = setTimeout(async () => {
  //         await postConcentration({
  //           co2: null,
  //           temperature: null,
  //           humidity: null,
  //           createdAt: Date.now() - 4000
  //         })
  //       }, 5000)
  //     }, 5000)
  //   };
  //   socket.onmessage = async (event) => {
  //     const response = JSON.parse(event.data)
  //     clearTimeout(timeout);
  //     dispatch(addToData({
  //       ...response,
  //       createdAt: Date.now()
  //     }))
  //     await postConcentration({
  //       ...response,
  //       createdAt: Date.now()
  //     })
  //   };
  //   //clean up function
  //   return () => socket.close();
  // }, [])
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
