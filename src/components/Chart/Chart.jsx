import './Chart.scss';

import CO2Chart from "./CO2Chart/CO2Chart";
import TemAndHumChart from "./TemAndHumChart/TemAndHumChart";
import { useGetConcentrationQuery } from "../../store/features/concentration/concentration";
import _ from "lodash";
import { truncateConcentration } from '../../services/concentration';
import { useState } from 'react';

const Chart = () => {
  const [clear, setClear] = useState(false)
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
          <div className='col-12'>
            <button onClick={()=>handleTruncateData()} className="chart-btn">Clear chart</button>
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
