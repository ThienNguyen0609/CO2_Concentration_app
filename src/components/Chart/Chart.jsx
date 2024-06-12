import './Chart.scss';

import CO2Chart from "./CO2Chart/CO2Chart";
import TemAndHumChart from "./TemAndHumChart/TemAndHumChart";
import _ from "lodash";
import { truncateConcentration } from '../../services/concentration';
import { addToData, clearData } from '../../store/features/data/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { postConcentration } from '../../services/concentration';

const Chart = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode.light)
  const data = useSelector((state) => state.data.data)

  const handleClearData = async () => {
    dispatch(clearData([]))
  }
  // const handleAddToData = () => {
  //   const action = async () => {
  //     const data = {
  //       co2: 304,
  //       temperature: 30,
  //       humidity: 80,
  //       createdAt: Date.now()
  //     }
  //     dispatch(addToData(data))
  //     const response = await postConcentration(data)
  //     console.log(response)
  //   }
  //   setInterval(action, 5000)
  // }

  const handleTruncateData = async () => {
    const response = await truncateConcentration()
    console.log(response)
  }

  return (
    <>
      <div className="row">
          <div className={'col-12'+(mode ? ' light-mode' : ' dark-mode')}>
            <button onClick={()=>handleClearData()} className="chart-btn font-color me-2">Clear chart</button>
            {/* <button onClick={()=>handleAddToData()} className="chart-btn font-color">Add To chart</button> */}
            <button onClick={()=>handleTruncateData()} className="chart-btn font-color">Clear Data</button>
          </div>
          <div className="col-6">
            <CO2Chart
              co2={[{
                data: _.isEmpty(data) ? [] : data?.map((item, index) => {
                  return [item.createdAt, item.co2];
                }),
                
              }]}
            />
          </div>
          <div className="col-6">
            <TemAndHumChart 
              temAndHum={[{
                data: _.isEmpty(data) ? [] : data?.map((item) => {
                    return [item.createdAt, item.temperature];
                  }),
                name: "temperature",
                type: "area"
              }, {
                data: _.isEmpty(data) ? [] : data?.map((item) => {
                  return [item.createdAt, item.humidity];
                }),
                name: "humidity",
                type: "area"
              }]}
            />
          </div>
        </div>
    </>
  );
};

export default Chart;
