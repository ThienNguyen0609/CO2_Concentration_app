import { max } from "lodash"
import ChartComponent from "../ChartComponent"

const TemAndHumChart = ({temAndHum, categories}) => {
    return (<>
        <div className="chart">
            <ChartComponent title={"TEMPERATURE AND HUMINITY"} type={"line"} data={temAndHum} 
            yaxis={[
              {
                min: 0,
                max: 100,
                axisTicks: {
                  show: false
                },
                title: {
                  style: {
                    color: "#fff",
                  },
                  text: "Temperature (℃)"
                },
              },
              {
                min: 0,
                max: 100,
                axisTicks: {
                  show: false
                },
                opposite: true,
                title: {
                  style: {
                    color: "#fff",
                  },
                  text: "Humidity (%)"
                },
              }
            ]} 
            fill={{
              type: "gradient",
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.9,
                  opacityTo: 0.1,
                  stops: [0, 100],
                },
            }} />
        </div>
    </>)
}

export default TemAndHumChart