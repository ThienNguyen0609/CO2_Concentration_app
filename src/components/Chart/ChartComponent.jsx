import "./ChartComponent.scss";

import Chart from "react-apexcharts";

const ChartComponent = ({ title, data, yaxis, type, fill }) => {
  // const testData = [{data: [
  //   [1713285141070, '500.00'],
  //   [1713285160882, '520.00'],
  //   [1713285195812, '432.00'],
  //   [1713285230717, '432.00'],
  //   [1713285239576, '432.00'],
  //   [1713285264314, '700.00']
  // ]}]

  return (
    <>
      <div className="item">
        <Chart
          options={{...options, yaxis: yaxis, title: {
            ...options.title, text: title
          }, fill: fill}}
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
    stacked: true,
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
    foreColor: "#ffffff",
  },
  xaxis: {
    type: "datetime",
    tickAmount: 6,
    axisTicks: {
      color: "#fff",
    },
    title: {
      text: "TIME",
      style: {
        color: "#fff",
      },
    },
    tickPlacement: "on",
    label: {
      datetimeUTC: true,
      datetimeFormatter: {
        year: "yyyy",
        month: "MMMM yyyy",
        day: "d MMMM",
        hour: "HH:mm:ss",
      },
      style: {
        color: "#fff",
      },
    }
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  title: {
    style: {
      color: "#fff",
    },
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
