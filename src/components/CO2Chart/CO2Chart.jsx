import "./CO2Chart.scss";

import { useState, useEffect } from "react";
import {
  handleGetByTimeStamp1h,
  handleGetByTimeStamp2h,
  handleGetByTimeStamp3h,
} from "../../services/CO2ChartService";
import {
  setMBTimestamp3h,
  setMBTimestamp2h,
  setMBTimestamp1h
} from "../../services/timestamp"
import { useGetConcentrationQuery } from "../../store/features/concentration/concentration";
import CO2ChartItem from "./CO2ChartItem/CO2ChartItem";
import _ from "lodash";

const CO2Chart = () => {
  const data3 = useGetConcentrationQuery(setMBTimestamp3h)
  const data2 = useGetConcentrationQuery(setMBTimestamp2h)
  const data1 = useGetConcentrationQuery(setMBTimestamp1h)
  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);
  const [categories1, setCategories1] = useState([]);
  const [categories2, setCategories2] = useState([]);
  const [categories3, setCategories3] = useState([]);

  useEffect(() => {
    !data1.error && !data1.isLoading && handleGetByTimeStamp1h(setSeries1, setCategories1, data1.data);
    !data2.error && !data2.isLoading && handleGetByTimeStamp2h(setSeries2, setCategories2, data2.data);
    !data3.error && !data3.isLoading && handleGetByTimeStamp3h(setSeries3, setCategories3, data3.data);
  }, [data1.data, data2.data, data3.data]);
  return (
    <>
      {!_.isEmpty(series1) && !_.isEmpty(series2) && !_.isEmpty(series3) &&
        <div>
          <CO2ChartItem series={series3} categories={categories3} title={"3 HOURS"} />
          <CO2ChartItem series={series2} categories={categories2} title={"2 HOURS"} />
          <CO2ChartItem series={series1} categories={categories1} title={"1 HOURS"} />
        </div>
      }
    </>
  );
};

export default CO2Chart;
