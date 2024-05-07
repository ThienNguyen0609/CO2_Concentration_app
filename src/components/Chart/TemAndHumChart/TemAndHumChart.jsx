import ChartComponent from "../ChartComponent"

const TemAndHumChart = ({temperature}) => {
    return (<>
        <div className="chart">
            <ChartComponent title={"TEMPERATURE AND HUMINITY"} data={temperature} />
        </div>
    </>)
}

export default TemAndHumChart