import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const CO2ChartItem = ({series, categories, title}) => {    
  const mode = useSelector((state) => state.mode.light);

  return (
    <>
      <div className="mb-3">
        <h1 style={{color: mode ? "#000" : "#fff"}}>{title}</h1>
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
      </div>
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
    tickAmount: 6,
    title: {
      text: "TIME (HOURS)",
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

export default CO2ChartItem;
