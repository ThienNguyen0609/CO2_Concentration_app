import "./Chart.scss";

import CO2Chart from "./CO2Chart/CO2Chart";
import TemAndHumChart from "./TemAndHumChart/TemAndHumChart";
import _ from "lodash";
import { truncateConcentration } from "../../services/concentration";
import { clearData } from "../../store/features/data/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../services/toastify";
import { changeFlag } from "../../store/features/wss/wssSlice";

const Chart = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.light);
  const data = useSelector((state) => state.data.data);
  const flag = useSelector((state) => state.wss.flag);

  const handleClearData = async () => {
    dispatch(clearData([]))
    notify("clear chart successfully!");
  }

  const handleTruncateData = async () => {
    const response = await truncateConcentration()
    notify(response);
  }

  return (
    <>
      <div className="row">
        <div className={"col-12" + (mode ? " light-mode" : " dark-mode")}>
          <button onClick={() => {
            if(!flag) dispatch(changeFlag(true))
            else notify("The device is connected.")
          }} className="chart-btn font-color me-2">Start</button>
          <button onClick={() => {
            if(flag) dispatch(changeFlag(false))
            else notify("The device has stopped connecting.")
          }} className="chart-btn font-color me-2">Stop</button>
          <button onClick={() => handleClearData()} className="chart-btn font-color me-2">Clear chart</button>
          <button onClick={() => handleTruncateData()} className="chart-btn font-color">Clear Data</button>
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
      </div>
    </>
  );
};

export default Chart;
