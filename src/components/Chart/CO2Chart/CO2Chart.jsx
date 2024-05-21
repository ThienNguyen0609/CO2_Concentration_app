import ChartComponent from "../ChartComponent"

const CO2Chart = ({co2}) => {
    return (<>
        <div className="chart">
            <ChartComponent title={"CO2 CONCRENTRATION"} data={co2} type={"area"} 
              yaxis={{
                min: 0,
                title: {
                  style: {
                    color: "#fff",
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