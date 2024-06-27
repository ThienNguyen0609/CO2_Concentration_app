import { getConcentrationByTimestamp } from "./concentration";

const handlePackageLost = (seriesLen, series, tem, hum, lostIndex) => {
    let quantityPackageLost = 1800 - seriesLen
    let count = 1
    series.forEach((item, index, array) => {
        if (index + count <= item.packageNumber - 1 && quantityPackageLost !== 0) {
            const boolen = array.some(i => i.packageNumber === index + 1);
            const findPackageLost = array.filter(i => i.packageNumber === index + 2);
            if (!boolen && findPackageLost.length < 2) {
                lostIndex.push(index + 1);
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
const handleGetTemAndHumByTimeStamp = async (setSeries, timestamp, seriesName, setLostIndex) => {
    const series = await getConcentrationByTimestamp(timestamp);
    let lostData = {
        seriesName: seriesName,
        isLost: false,
        index: []
    }
    let temperature = [series[0].temperature, ...series.map(item => item.temperature)]
    let humidity = [series[0].humidity, ...series.map(item => item.humidity)]
    if (series.length < 1800) {
        lostData.isLost = true
        handlePackageLost(series.length, series, temperature, humidity, lostData.index)
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
    lostData.isLost && setLostIndex(lostData.index)
}

export {
    handleGetCategories,
    handleGetTemAndHumByTimeStamp,
}