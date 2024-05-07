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
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const handleTruncateData = async () => {
    const response = await truncateConcentration()
    setClear(draft => !draft)
    setTimeout(() => {
      setClear(draft => !draft)
    }, 500)
  }

  return (
    <>
      {!isLoading && (
        <div className="row">
          <div className="col-1 d-flex flex-column">
            <button onClick={()=>handleTruncateData()} className="chart-btn">Clear chart</button>
            <CO2Chart
              co2={[{
                data: clear ? [] : data?.map((item, index) => {
                  return [new Date(item.createdAt).getTime(), item.co2];
                }),
                
              }]}
            />
          </div>
          <div className="col-1">
            <TemAndHumChart 
              temperature={[{
                data: clear ? [] : data?.map((item) => {
                    return [new Date(item.createdAt).getTime(), item.temperature];
                  }),
                
              }]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chart;
