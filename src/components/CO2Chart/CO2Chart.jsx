import "./CO2Chart.scss";

import { useState, useEffect } from "react";
import {
  handleGetByTimeStamp1h,
  handleGetByTimeStamp2h,
  handleGetByTimeStamp3h,
} from "../../services/CO2ChartService";
import CO2ChartItem from "./CO2ChartItem/CO2ChartItem";
import _ from "lodash";

const CO2Chart = () => {
  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);
  const [categories1, setCategories1] = useState([]);
  const [categories2, setCategories2] = useState([]);
  const [categories3, setCategories3] = useState([]);

  useEffect(() => {
    handleGetByTimeStamp1h(setSeries1, setCategories1);
    handleGetByTimeStamp2h(setSeries2, setCategories2);
    handleGetByTimeStamp3h(setSeries3, setCategories3);
  }, []);
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
