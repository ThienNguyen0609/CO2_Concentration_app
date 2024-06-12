import "./ChartComponent.scss";

import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const ChartComponent = ({ title, data, yaxis, type, fill }) => {
  const mode = useSelector(state => state.mode.light);

  return (
    <>
      <div className="item">
        <Chart
          options={{
            ...options, 
            yaxis: yaxis, 
            xaxis: {
              ...options.xaxis,
              title: {
                ...options.xaxis.title,
                style: {
                  color: mode ? "#000" : "#fff",
                },
              },
            },
            title: {
              ...options.title, 
              text: title,
              style: {
                color: mode ? "#000" : "#fff",
              },
            }, 
            fill: fill,
            chart: {
              ...options.chart,
              foreColor: mode ? "#000" : "#fff"
            }
          }}
          type={type}
          series={data}
          width="100%"
        />
      </div>
    </>
  );
};

const options = {
  chart: {
    id: "chart 2",
    stacked: false,
    toolbar: {
      autoSelected: "zoom",
      show: true,
    },
    zoom: {
      enabled: true,
      type: "x",
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: "#90CAF9",
          opacity: 0.4,
        },
        stroke: {
          color: "#0D47A1",
          opacity: 0.4,
          width: 1,
        },
      },
    },
  },
  xaxis: {
    type: "datetime",
    tickAmount: 6,
    axisTicks: {
      color: "#fff",
    },
    title: {
      text: "TIME",
    },
    tickPlacement: "on",
    label: {
      datetimeUTC: true,
      datetimeFormatter: {
        year: "yyyy",
        month: "MMMM yyyy",
        day: "d MMMM",
        hour: "HH:mm:ss",
      }
    }
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  title: {
    align: "center"
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
    show: false
  },
};

// const seriesData = [
//   {
//     data: [
//       [1325430000000, 330],
//       [1325430001000, 431],
//       [1325430002000, 131],
//       // [1325430003000, 731],
//       // [1325430004000, 631],
//       // [1325430005000, 930.95],
//       // [1325430006000, 631.24],
//       // [1325430007000, 131.29],
//       // [1325430008000, 231.85],
//     ],
//   },
// ];

export default ChartComponent;
