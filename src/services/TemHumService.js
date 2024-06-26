import { getConcentrationByTimestamp } from "./concentration";

const handlePackageLost = (seriesLen, series, seriesName, tem, hum) => {
    let quantityPackageLost = 1800 - seriesLen
    let count = 1
    console.log("CO2 ", seriesName);
    series.forEach((item, index, array) => {
        if (index + count <= item.packageNumber - 1 && quantityPackageLost !== 0) {
            const boolen = array.some(i => i.packageNumber === index + 1)
            if (!boolen) {
                console.log(index + 1)
                quantityPackageLost--;
                tem.splice(index + 1, 0, null)
                hum.splice(index + 1, 0, null)
                count++;
            }
        }
    })
}

const handleGetCategories = (setCategiries) => {
    const cate = [];
    let timestamp = 1704067200000;
    for (let i = 0; i < 1801; i++) {
        cate.push(timestamp);
        timestamp += 6000;
    }
    setCategiries(cate);
}
const handleGetTemAndHumByTimeStamp = async (setSeries, timestamp, seriesName) => {
    const series = await getConcentrationByTimestamp(timestamp);
    console.log(seriesName, series)
    let temperature = [series[0].temperature, ...series.map(item => item.temperature)]
    let humidity = [series[0].humidity, ...series.map(item => item.humidity)]
    if (series.length < 1800) {
        handlePackageLost(series.length, series, seriesName, temperature, humidity)
    }

    setSeries([
        {
            name: "Temperature",
            data: temperature,
        },
        {
            name: "Humidity",
            data: humidity,
        },
    ]);
}

export {
    handleGetCategories,
    handleGetTemAndHumByTimeStamp,
}