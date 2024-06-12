import { useState } from "react";
import "./CO2Chart.scss";

import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useEffect } from "react"
import { getConcentrationByTimestamp } from "../../services/concentration";

const CO2Chart = () => {
  const mode = useSelector((state) => state.mode.light);
  const [series, setSeries] = useState([]);
  const [categories, setCategiries] = useState([])

  useEffect(() => {
    const handleGetByTimeStamp = async () => {
      const timestampForSeries1 = {
        min: "2024-06-10T11:24:39.000Z",
        max: "2024-06-10T14:25:00.000Z"
      }
      const timestampForSeries2 = {
        min: "2024-06-11T06:27:23.000Z",
        max: "2024-06-11T09:28:00.000Z"
      }
      const timestampForSeries3 = {
        min: "2024-06-12T07:51:22.000Z",
        max: "2024-06-12T10:52:00.000Z"
      }
      const series1 = await getConcentrationByTimestamp(timestampForSeries1)
      const series2 = await getConcentrationByTimestamp(timestampForSeries2)
      const series3 = await getConcentrationByTimestamp(timestampForSeries3)
      // const series1 = await getConcentrationByTimestamp()
      // const series1 = await getConcentrationByTimestamp()
      console.log("series1:", series1)
      console.log("series2:", series2)
      console.log("series3:", series3)
      setSeries([
        {
          name: "1mg",
          data: series1.map(item => item.co2)
        },
        {
          name: "2mg",
          data: series2.filter((item, index) => index < 1978).map(item => item.co2),
        },
        {
          name: "3mg",
          data: series3.filter((item, index) => index < 1978).map(item => item.co2),
        },
      ])
      const cate = []
      let timestamp = 1704067200000;
      for(let i=0; i<1978; i++) {
        cate.push(timestamp)
        timestamp+=5000
      }
      setCategiries(cate)
    }

    handleGetByTimeStamp()
  }, [])
  return (
    <>
      <Chart
        options={{
          ...options,
          yaxis: {
            ...options.yaxis,
            title: {
              ...options.yaxis.title,
              style: {
                color: mode ? "#000" : "#fff",
              },
            },
          },
          xaxis: {
            ...options.xaxis,
            categories: categories,
            title: {
              ...options.xaxis.title,
              style: {
                color: mode ? "#000" : "#fff",
              },
            },
          },
          title: {
            ...options.title,
            style: {
              color: mode ? "#000" : "#fff",
            },
          },
          chart: {
            ...options.chart,
            foreColor: mode ? "#000" : "#fff",
          },
        }}
        type={"line"}
        series={series}
        width="100%"
      />
    </>
  );
};

const options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false,
  },
  xaxis: {
    type: "datetime",
    title: {
      text: "TIME (HOURS)",
    },
    label: {
      datetimeUTC: true,
      datetimeFormatter: {
        year: "yyyy",
        month: "MMMM yyyy",
        day: "d MMMM",
        hour: "HH:mm:ss",
      },
    },
  },
  yaxis: {
    min: 0,
    title: {
      text: "CO2 CONCRENTRATION (ppm)",
    },
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  title: {
    align: "center",
    text: "CO2 CONCRENTRATION",
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    strokeWidth: 0,
    hover: {
      size: 8,
    },
  },
  tooltip: {
    x: {
      format: "HH:mm:ss",
    },
  },
  legend: {
    show: true,
    position: "top",
  },
};

export default CO2Chart;
