import "./TemHumChart.scss";

import { useState, useEffect } from "react";
import TemHumChartItem from "./TemHumItem/TemHumChartItem";
import {
  handleGetCategories,
  handleGetTemAndHumByTimeStamp,
} from "../../services/TemHumService";
import _ from "lodash";
import { useGetConcentrationQuery } from "../../store/features/concentration/concentration";
import { setMBTimestamp3h } from "../../services/timestamp";

const TemHumChart = () => {
  const { data, error, isLoading } = useGetConcentrationQuery(setMBTimestamp3h)

  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);
  const [series4, setSeries4] = useState([]);
  const [series5, setSeries5] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if(!error && !isLoading) {
      handleGetCategories(setCategories);
      handleGetTemAndHumByTimeStamp(setSeries1, data[0], "series1");
      handleGetTemAndHumByTimeStamp(setSeries2, data[1], "series2");
      handleGetTemAndHumByTimeStamp(setSeries3, data[2], "series3");
      handleGetTemAndHumByTimeStamp(setSeries4, data[3], "series4");
      handleGetTemAndHumByTimeStamp(setSeries5, data[4], "series5");
    }
  }, [data]);
  return (
    <>
      {!_.isEmpty(series1) && !_.isEmpty(series2) && !_.isEmpty(series3) && (
        <div>
          <TemHumChartItem
            series={series1}
            categories={categories}
            title={"1mg"}
          />
          <TemHumChartItem
            series={series2}
            categories={categories}
            title={"2mg"}
          />
          <TemHumChartItem
            series={series3}
            categories={categories}
            title={"3mg"}
          />
          <TemHumChartItem
            series={series4}
            categories={categories}
            title={"4mg"}
          />
          <TemHumChartItem
            series={series5}
            categories={categories}
            title={"5mg"}
          />
        </div>
      )}
    </>
  );
};

export default TemHumChart;
