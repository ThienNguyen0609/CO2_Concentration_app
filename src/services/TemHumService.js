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
const handleGetTemAndHumByTimeStamp = async (setSeries, data, seriesName, setLostIndex) => {
    let lostData = {
        seriesName: seriesName,
        isLost: false,
        index: []
    }
    console.log(seriesName, data)
    let temperature = [data[0].temperature, ...data.map(item => item.temperature)]
    let humidity = [data[0].humidity, ...data.map(item => item.humidity)]
    if (data.length < 1800) {
        lostData.isLost = true
        handlePackageLost(data.length, data, temperature, humidity, lostData.index)
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