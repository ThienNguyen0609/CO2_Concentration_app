import ChartComponent from "../ChartComponent"
import { useSelector } from "react-redux";

const CO2Chart = ({co2}) => {
  const mode = useSelector(state => state.mode.light);
    return (<>
        <div className="chart">
            <ChartComponent title={"CO2 CONCRENTRATION"} data={co2} type={"area"} 
              yaxis={{
                min: 0,
                title: {
                  style: {
                    color: mode ? "#000" : "#fff",
                  },
                  text: "CO2 CONCRENTRATION (ppm)"
                },
              }} 
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

export default CO2Chart