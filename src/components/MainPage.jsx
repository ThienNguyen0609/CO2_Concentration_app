import "./MainPage.scss";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToData, setServerPackageLost } from "../store/features/data/dataSlice";
import { postConcentration } from "../services/concentration";
import { ToastContainer } from "react-toastify";
import { notify } from "../services/toastify";
import _ from "lodash";

const MainPage = () => {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.wss.flag);

  useEffect(() => {
    let socket;
    let interval;
    let timestamp;
    let index = 0;
    if(flag) {
      socket = new WebSocket("ws://192.168.43.249:80/ws")
      socket.onopen = (event) => {
        notify("success connect wss!", "success");
        interval = setInterval(() => {
          socket.send("get");
          timestamp = Date.now()
          index++;
        }, 6000)
      };
      socket.onerror = (event) => {
        notify("error connect wss!", "error");
      }
      socket.onmessage = async (event) => {
        const getTime = Date.now();
        const response = JSON.parse(event.data)
        let request = {};
        if(response.status) {
          request = {
            co2: response.co2,
            temperature: response.temperature.toFixed(2),
            humidity: response.humidity.toFixed(2),
            packageTime: getTime - timestamp,
            packageNumber: index
          }
        }
        else {
          request = {
            co2: null,
            temperature: null,
            humidity: null,
            packageTime: getTime - timestamp,
            packageNumber: index
          }
        }
        
        dispatch(addToData({
          ...request,
          createdAt: getTime
        }))
        const resServer = await postConcentration({
          ...request,
          createdAt: getTime
        })
        if(resServer.lostError) {
          dispatch(setServerPackageLost([...resServer.packageLost].reverse()))
        }
      };
    }
    //clean up function
    return () => {
      if(flag) {
        clearInterval(interval);
        index=0;
        socket.close();
        notify("success close wss!", "success");
      }
    }
  }, [flag])
  return (
    <>
      <div className="mp-container">
        <NavBar />
        <ToastContainer />
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
