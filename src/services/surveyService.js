const handleGetPackageLost = (data, setSurvey) => {
    let survey = []
    data.forEach((dataItem, dataIndex) => {
        let quantityPackageLost = 1800 - dataItem.length
        let packageLost = []
        if (quantityPackageLost > 0) {
            let count = 1
            dataItem.forEach((item, index, array) => {
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
        const averageTime = dataItem.reduce(
            (accumulator, currentValue) => accumulator + currentValue.packageTime,
            0,
        );
        survey.push({
            mass: `${dataIndex+1} mg`,
            averageTime: (averageTime / dataItem.length).toFixed(2),
            lostPackage: packageLost.length > 0 ? packageLost : null,
            percent: `${(((1800 - packageLost.length) / 1800) * 100).toFixed(2)} %`
        })
    })
    setSurvey(survey)
}

const handleCountAverage = (data, setSurvey, type) => {
    let survey = []
    data.forEach((dataItem, dataIndex) => {
        let len = dataItem.length
        let total = 0
        dataItem.forEach(item => {
            if(item[`${type}`] !== null && item.temperature && item.humidity) {
                total += parseInt(item[`${type}`])
            }
            else len--
        })
        survey.push({
            mass: `${dataIndex+1} mg`,
            first: dataItem[0][`${type}`],
            last: dataItem[dataItem.length - 1][`${type}`],
            average: (total / len).toFixed(2)
        })
    });
    setSurvey(survey)
}
export {
    handleGetPackageLost,
    handleCountAverage,
}