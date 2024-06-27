import _ from "lodash";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const TemHumChartItem = ({ series, categories, title, lostIndex }) => {
  const mode = useSelector((state) => state.mode.light);
  return (
    <>
      <div className="col-12 mb-3">
        <div style={{width: "100%", display: "flex", gap: "20px", marginBottom: "20px"}}>
          <h1 style={{color: mode ? "#000" : "#fff", margin: "0"}}>{title}</h1>
          {lostIndex && !_.isEmpty(lostIndex) && (
            <div style={{display: "flex", gap: "5px", alignItems: "flex-end"}}>
              <h4 style={{margin: "0", color: mode ? "#000" : "#fff"}}>Index:</h4>
              <p style={{margin: "0", color: mode ? "#000" : "#fff"}}>{lostIndex.join(", ")}</p>
            </div>
          )}
        </div>
        <Chart
          options={{
            ...options,
            yaxis: [
              {
                min: 0,
                max: 100,
                title: {
                  style: {
                    color: "#008FFB",
                  },
                  text: "Temperature (℃)",
                },
              },
              {
                min: 0,
                max: 100,
                opposite: true,
                title: {
                  style: {
                    color: "#00E396",
                  },
                  text: "Humidity (%)",
                },
              },
            ],
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
    type: "area",
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
  stroke: {
    curve: "straight",
    width: 2,
  },
  title: {
    align: "center",
    text: "TEMPERATURE AND HUMIDITY",
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

export default TemHumChartItem;
