import "./MainPage.scss";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToData } from "../store/features/data/dataSlice";
import { postConcentration } from "../services/concentration";
import { ToastContainer } from "react-toastify";
import { notify } from "../services/toastify";

const MainPage = () => {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.wss.flag);
  useEffect(() => {
    let socket;
    let interval;
    let timeout;
    let timestamp;
    let count = 0;
    if(flag) {
      socket = new WebSocket("ws://192.168.43.249:80/ws")
      socket.onopen = (event) => {
        notify("success connect wss!");
        interval = setInterval(() => {
          socket.send("get");
          timestamp = Date.now()
          count++;
        }, 6000)
      };
      socket.onmessage = async (event) => {
        const getTime = Date.now();
        const response = JSON.parse(event.data)
        let request = {};
        clearTimeout(timeout)
        console.log("count:", count)
        if(response.status) {
          request = {
            co2: response.co2,
            temperature: response.temperature.toFixed(2),
            humidity: response.humidity.toFixed(2),
            packageTime: getTime - timestamp,
            packageNumber: count
          }
        }
        else {
          request = {
            co2: null,
            temperature: null,
            humidity: null,
            packageTime: getTime - timestamp,
            packageNumber: count
          }
        }
        
        dispatch(addToData({
          ...request,
          createdAt: getTime
        }))
        await postConcentration({
          ...request,
          createdAt: getTime
        })
        console.log("to server: ", Date.now() - getTime)
      };
    }
    //clean up function
    return () => {
      if(flag) {
        clearInterval(interval);
        count=0;
        socket.close();
        notify("success close wss!");
      }
    }
  }, [flag])
  return (
    <>
      <div className="mp-container">
        <NavBar />
        <ToastContainer />
        <div className="container-wrapper">
          <div className="mp-inner row">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
