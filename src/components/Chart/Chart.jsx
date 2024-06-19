import "./Chart.scss";

import CO2Chart from "./CO2Chart/CO2Chart";
import TemAndHumChart from "./TemAndHumChart/TemAndHumChart";
import _ from "lodash";
import { clearData, clearPackageLost } from "../../store/features/data/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../services/toastify";
import { changeFlag } from "../../store/features/wss/wssSlice";
import TruncateModal from "../Modal/TruncateModal";
import DeleteModal from "../Modal/DeleteModal";
import { useState } from "react";

const Chart = () => {
  const dispatch = useDispatch();
  const [truncateShow, setTruncateShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const mode = useSelector((state) => state.mode.light);
  const data = useSelector((state) => state.data.data);
  const flag = useSelector((state) => state.wss.flag);
  const wssPackageLost = useSelector((state) => state.data.wssPackageLost);
  const serverPackageLost = useSelector((state) => state.data.serverPackageLost);

  const handleClearData = async () => {
    dispatch(clearData([]))
    dispatch(clearPackageLost([]))
    notify("clear chart successfully!", "success");
  }

  return (
    <>
      <div className="row">
        <div className={"col-12" + (mode ? " light-mode" : " dark-mode")}>
          <button onClick={() => {
            if(!flag) dispatch(changeFlag(true))
            else notify("The device is connected.", "warning")
          }} className="chart-btn font-color me-2">Start</button>
          <button onClick={() => {
            if(flag) dispatch(changeFlag(false))
            else notify("The device has stopped connecting.", "warning")
          }} className="chart-btn font-color me-2">Stop</button>
          <button onClick={() => handleClearData()} className="chart-btn font-color me-2">Clear chart</button>
          <button onClick={() => setTruncateShow(true)} className="chart-btn font-color me-2">Clear Data</button>
          <TruncateModal show={truncateShow} handleClose={setTruncateShow} />
          <button onClick={() => setDeleteShow(true)} className="chart-btn font-color">Delete Data By Time</button>
          <DeleteModal show={deleteShow} handleClose={setDeleteShow} />
        </div>
        <div className="col-6">
          <CO2Chart
            co2={[{
              data: _.isEmpty(data) ? [] : data?.map((item, index) => {
                return [item.createdAt, item.co2];
              })
            }]}
          />
        </div>
        <div className="col-6">
          <TemAndHumChart
            temAndHum={[
              {
                data: _.isEmpty(data) ? [] : data?.map((item) => {
                  return [item.createdAt, item.temperature];
                }),
                name: "temperature",
                type: "area",
              },
              {
                data: _.isEmpty(data) ? [] : data?.map((item) => {
                  return [item.createdAt, item.humidity];
                }),
                name: "humidity",
                type: "area",
              }
            ]}
          />
        </div>
        {!_.isEmpty(wssPackageLost) && wssPackageLost && wssPackageLost.length > 0 && (
          <div className="col-12 mt-3" style={{color: mode ? "#000" : "#fff"}}>
            Wss package lost: {wssPackageLost.toString()}
          </div>
        )}
        {!_.isEmpty(serverPackageLost) && serverPackageLost && serverPackageLost.length > 0 && (
          <div className="col-12 mt-3" style={{color: mode ? "#000" : "#fff"}}>
            Server package lost: {serverPackageLost.toString()}
          </div>
        )}
      </div>
    </>
  );
};

export default Chart;
