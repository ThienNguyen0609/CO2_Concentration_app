import "./TemHumChart.scss";

import { useState, useEffect } from "react";
import TemHumChartItem from "./TemHumItem/TemHumChartItem";
import {
  handleGetCategories,
  handleGetTemAndHumByTimeStamp,
} from "../../services/TemHumService";
import _ from "lodash";

const TemHumChart = () => {
  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);
  const [series4, setSeries4] = useState([]);
  const [series5, setSeries5] = useState([]);
  const [lostIndex1, setLostIndex1] = useState([]);
  const [lostIndex2, setLostIndex2] = useState([]);
  const [lostIndex3, setLostIndex3] = useState([]);
  const [lostIndex4, setLostIndex4] = useState([]);
  const [lostIndex5, setLostIndex5] = useState([]);
  const [timestampSeries1, setTimestampSeries1] = useState({
    min: "2024-06-25T07:24:13.000Z",
    max: "2024-06-25T10:24:13.000Z",
  });
  const [timestampSeries2, setTimestampSeries2] = useState({
    min: "2024-06-25T13:59:42.000Z",
    max: "2024-06-25T16:59:42.000Z",
  });
  const [timestampSeries3, setTimestampSeries3] = useState({
    min: "2024-06-26T07:26:54.000Z",
    max: "2024-06-26T10:26:54.000Z"
  });
  const [timestampSeries4, setTimestampSeries4] = useState({
    min: "2024-06-26T01:39:44.000Z",
    max: "2024-06-26T04:39:44.000Z"
  });
  const [timestampSeries5, setTimestampSeries5] = useState({
    min: "2024-06-24T14:41:26.000Z",
    max: "2024-06-24T17:41:26.000Z"
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleGetCategories(setCategories);
    handleGetTemAndHumByTimeStamp(setSeries1, timestampSeries1, "series1", setLostIndex1);
    handleGetTemAndHumByTimeStamp(setSeries2, timestampSeries2, "series2", setLostIndex2);
    handleGetTemAndHumByTimeStamp(setSeries3, timestampSeries3, "series3", setLostIndex3);
    handleGetTemAndHumByTimeStamp(setSeries4, timestampSeries4, "series4", setLostIndex4);
    handleGetTemAndHumByTimeStamp(setSeries5, timestampSeries5, "series5", setLostIndex5);
  }, []);
  return (
    <>
      {!_.isEmpty(series1) && !_.isEmpty(series2) && !_.isEmpty(series3) && (
        <div>
          <TemHumChartItem
            series={series1}
            lostIndex={lostIndex1}
            categories={categories}
            title={"1mg"}
          />
          <TemHumChartItem
            series={series2}
            lostIndex={lostIndex2}
            categories={categories}
            title={"2mg"}
          />
          <TemHumChartItem
            series={series3}
            lostIndex={lostIndex3}
            categories={categories}
            title={"3mg"}
          />
          <TemHumChartItem
            series={series4}
            lostIndex={lostIndex4}
            categories={categories}
            title={"4mg"}
          />
          <TemHumChartItem
            series={series5}
            lostIndex={lostIndex5}
            categories={categories}
            title={"5mg"}
          />
        </div>
      )}
    </>
  );
};

export default TemHumChart;
