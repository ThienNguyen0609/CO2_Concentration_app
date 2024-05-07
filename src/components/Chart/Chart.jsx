import CO2Chart from "./CO2Chart/CO2Chart";
import TemAndHumChart from "./TemAndHumChart/TemAndHumChart";
import { useGetConcentrationQuery } from "../../store/features/concentration/concentration";
import _ from "lodash";
import { useEffect, useState } from "react";

const Chart = () => {
  const { data, error, isLoading } = useGetConcentrationQuery(null, {
    pollingInterval: 2000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  // const { data, error, isLoading } = useGetConcentrationQuery();
  // if(!isLoading && !_.isEmpty(data)) {
  //   console.log(data[0].createdAt)
  //   console.log(new Date(data[0].createdAt).toLocaleString())
  // }
  console.log(import.meta.env.VITE_SERVER_LINK)

  return (
    <>
      {!isLoading && (
        <div className="row">
          <div className="col-1">
            <CO2Chart
              co2={[{
                data: data?.map((item, index) => {
                    return [new Date(item.createdAt).getTime(), item.co2];
                  }),
                
              }]}
            />
          </div>
          <div className="col-1">
            <TemAndHumChart 
              temperature={[{
                data: data?.map((item) => {
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
