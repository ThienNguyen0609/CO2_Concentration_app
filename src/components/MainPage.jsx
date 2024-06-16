import "./MainPage.scss";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToData, setServerPackageLost, setWssPackageLost } from "../store/features/data/dataSlice";
import { postConcentration } from "../services/concentration";
import { ToastContainer } from "react-toastify";
import { notify } from "../services/toastify";
import _ from "lodash";

const MainPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const flag = useSelector((state) => state.wss.flag);

  useEffect(() => {
    let socket;
    let interval;
    let timeout;
    let timestamp;
    let count = 0;
    let packNum;
    if(flag) {
      socket = new WebSocket("ws://192.168.43.249:80/ws")
      socket.onopen = (event) => {
        notify("success connect wss!", "success");
        interval = setInterval(() => {
          socket.send("get");
          timestamp = Date.now()
          count++;
          timeout = setTimeout(() => {
            console.log("cannot clear timeout")
          }, 6000)
        }, 6000)
      };
      socket.onerror = (event) => {
        notify("error connect wss!", "error");
      }
      socket.onmessage = async (event) => {
        const getTime = Date.now();
        const response = JSON.parse(event.data)
        if(!_.isEmpty(data)) {
          let cnt = count
          let cntFlag = true
          do {
            packNum = data[data.length-1].packageNumber
            if(cnt !== packNum+1) {
              dispatch(setWssPackageLost(cnt-1))
              cnt--
            }
            else cntFlag = false
          } while(cntFlag)
        }
        let request = {};
        clearTimeout(timeout)
        console.log("count:", count)
        console.log("time:", getTime - timestamp)
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
        const resServer = await postConcentration({
          ...request,
          createdAt: getTime
        })
        if(resServer.lostError) {
          dispatch(setServerPackageLost(resServer.packageLost))
        }
      };
    }
    //clean up function
    return () => {
      if(flag) {
        clearInterval(interval);
        count=0;
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
          <div className="mp-inner row">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
