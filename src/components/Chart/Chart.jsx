import './Chart.scss';

import CO2Chart from "./CO2Chart/CO2Chart";
import TemAndHumChart from "./TemAndHumChart/TemAndHumChart";
import { useGetConcentrationQuery } from "../../store/features/concentration/concentration";
import _ from "lodash";
import { truncateConcentration } from '../../services/concentration';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Chart = () => {
  const [clear, setClear] = useState(false)
  const mode = useSelector((state) => state.mode.light)
  const { data, error, isLoading } = useGetConcentrationQuery(null, {
    pollingInterval: 10000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const handleTruncateData = async () => {
    const response = await truncateConcentration()
    setClear(draft => !draft)
    setTimeout(() => {
      setClear(draft => !draft)
    }, 10000)
  }

  return (
    <>
      {!isLoading && (
        <div className="row">
          <div className={'col-12'+(mode ? ' light-mode' : ' dark-mode')}>
            <button onClick={()=>handleTruncateData()} className="chart-btn font-color">Clear chart</button>
          </div>
          <div className="col-6">
            <CO2Chart
              co2={[{
                data: clear ? [] : data?.map((item, index) => {
                  return [new Date(item.createdAt).getTime(), item.co2];
                }),
                
              }]}
            />
          </div>
          <div className="col-6">
            <TemAndHumChart 
              temAndHum={[{
                data: clear ? [] : data?.map((item) => {
                    return [new Date(item.createdAt).getTime(), item.temperature];
                  }),
                name: "temperature",
                type: "area"
              }, {
                data: clear ? [] : data?.map((item) => {
                  return [new Date(item.createdAt).getTime(), item.humidity];
                }),
                name: "humidity",
                type: "area"
              }]}
              // categories={
              //   clear ? [] : data?.map((item) => {
              //     return [new Date(item.createdAt).getTime()];
              //   })
              // }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chart;
