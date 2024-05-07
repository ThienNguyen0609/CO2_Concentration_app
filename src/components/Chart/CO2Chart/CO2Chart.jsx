import ChartComponent from "../ChartComponent"

const CO2Chart = ({co2}) => {
    return (<>
        <div className="chart">
            <ChartComponent title={"CO2 CONCRENTRATION"} data={co2} />
        </div>
    </>)
}

export default CO2Chart