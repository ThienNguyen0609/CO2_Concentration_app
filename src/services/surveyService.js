const handleGetPackageLost = (data, setSurvey, mass) => {
    let quantityPackageLost = 1800 - data.length
    let packageLost = []
    if (quantityPackageLost > 0) {
        let count = 1
        data.forEach((item, index, array) => {
            if (index + count <= item.packageNumber - 1 && quantityPackageLost !== 0) {
                const boolen = array.some(i => i.packageNumber === index + 1);
                const findPackageLost = array.filter(i => i.packageNumber === index + 2);
                if (!boolen && findPackageLost.length < 2) {
                    quantityPackageLost--;
                    packageLost.push(index + 1)
                    count++;
                }
            }
        })
    }
    const averageTime = data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.packageTime,
        0,
    );
    setSurvey(draft => [
        ...draft,
        {
            mass: mass,
            averageTime: (averageTime / data.length).toFixed(2),
            lostPackage: packageLost.length > 0 ? packageLost : null,
            percent: `${(((1800 - packageLost.length) / 1800) * 100).toFixed(2)}%`
        }
    ])
}

const handleCountAverage = (data, setCO2Survey, setTemSurvey, setHumSurvey, mass) => {
    let len = data.length
    let CO2total = 0
    let temTotal = 0
    let humTotal = 0
    data.forEach(item => {
        if(item.co2 !== null && item.temperature && item.humidity) {
            CO2total += parseInt(item.co2)
            temTotal += parseInt(item.temperature)
            humTotal += parseInt(item.humidity)
        }
        else len--
    });
    setCO2Survey(draft => [
        ...draft,
        {
            mass: mass,
            first: data[0].co2,
            last: data[data.length - 1].co2,
            average: (CO2total / len).toFixed(2)
        }
    ])
    setTemSurvey(draft => [
        ...draft,
        {
            mass: mass,
            first: data[0].temperature,
            last: data[data.length - 1].temperature,
            average: (temTotal / len).toFixed(2)
        }
    ])
    setHumSurvey(draft => [
        ...draft,
        {
            mass: mass,
            first: data[0].humidity,
            last: data[data.length - 1].humidity,
            average: (humTotal / len).toFixed(2)
        }
    ])
}
export {
    handleGetPackageLost,
    handleCountAverage
}