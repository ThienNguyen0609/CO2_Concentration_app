const handlePackageLost = (len, seriesLen, series, data, lostIndex) => {
  let quantityPackageLost = len - seriesLen
  let count = 1
  series.forEach((item, index, array) => {
    if (index + count <= item.packageNumber-1 && quantityPackageLost !== 0) {
      const boolen = array.some(i => i.packageNumber === index + 1);
      const findPackageLost = array.filter(i => i.packageNumber === index + 2);
      if (!boolen && findPackageLost.length < 2) {
        lostIndex.push(index + 1);
        quantityPackageLost--;
        data.splice(index + 1, 0, null)
        count++;
      }
    }
  })
}
const handleSetSeries = (setSeries, data1, data2, data3, data4, data5) => {
  setSeries([
    {
      name: "1mg",
      data: data1,
    },
    {
      name: "2mg",
      data: data2,
    },
    {
      name: "3mg",
      data: data3,
    },
    {
      name: "4mg",
      data: data4,
    },
    {
      name: "5mg",
      data: data5,
    },
  ]);
}
const handleSetLostData = (setLostData, lostData1, lostData2, lostData3, lostData4, lostData5) => {
  setLostData([
    lostData1.isLost ? lostData1 : null,
    lostData2.isLost ? lostData2 : null,
    lostData3.isLost ? lostData3 : null,
    lostData4.isLost ? lostData4 : null,
    lostData5.isLost ? lostData5 : null,
  ])
}
const handleSetCategories = (setCategiries, quantityPackage) => {
  const cate = [];
  let timestamp = 1704067200000;
  for (let i = 0; i < quantityPackage + 1; i++) {
    cate.push(timestamp);
    timestamp += 6000;
  }
  setCategiries(cate);
}
const handleCountAverageTime = (setAverage, data) => {
  const averageTime1 = data[0].reduce(
    (accumulator, currentValue) => accumulator + currentValue.packageTime,
    0,
  );
  const averageTime2 = data[1].reduce(
    (accumulator, currentValue) => accumulator + currentValue.packageTime,
    0,
  );
  const averageTime3 = data[2].reduce(
    (accumulator, currentValue) => accumulator + currentValue.packageTime,
    0,
  );
  const averageTime4 = data[3].reduce(
    (accumulator, currentValue) => accumulator + currentValue.packageTime,
    0,
  );
  const averageTime5 = data[4].reduce(
    (accumulator, currentValue) => accumulator + currentValue.packageTime,
    0,
  );
  setAverage({
    averageTime1: (averageTime1 / data[0].length).toFixed(2),
    averageTime2: (averageTime2 / data[1].length).toFixed(2),
    averageTime3: (averageTime3 / data[2].length).toFixed(2),
    averageTime4: (averageTime4 / data[3].length).toFixed(2),
    averageTime5: (averageTime5 / data[4].length).toFixed(2),
  })
}


// ====================================== 3 TIENG ============================================//
const handleGetByTimeStamp3h = async (setSeries, setCategiries, setLostData, data) => {
  const series1 = data[0]
  const series2 = data[1]
  const series3 = data[2]
  const series4 = data[3]
  const series5 = data[4]

  let data1 = [series1[0].co2, ...series1.map(item => item.co2)]
  let data2 = [series2[0].co2, ...series2.map(item => item.co2)]
  let data3 = [series3[0].co2, ...series3.map(item => item.co2)]
  let data4 = [series4[0].co2, ...series4.map(item => item.co2)]
  let data5 = [series5[0].co2, ...series5.map(item => item.co2)]
  let lostData1 = {seriesName: "1mg", isLost: false, index: []}
  let lostData2 = {seriesName: "2mg", isLost: false, index: []}
  let lostData3 = {seriesName: "3mg", isLost: false, index: []}
  let lostData4 = {seriesName: "4mg", isLost: false, index: []}
  let lostData5 = {seriesName: "5mg", isLost: false, index: []}

  const seriesLen = 1800;

  if (series1.length < seriesLen) {
    lostData1.isLost = true
    handlePackageLost(seriesLen, series1.length, series1, data1, lostData1.index)
  }
  if (series2.length < seriesLen) {
    lostData2.isLost = true
    handlePackageLost(seriesLen, series2.length, series2, data2, lostData2.index)
  }
  if (series3.length < seriesLen) {
    lostData3.isLost = true
    handlePackageLost(seriesLen, series3.length, series3, data3, lostData3.index)
  }
  if (series4.length < seriesLen) {
    lostData4.isLost = true
    handlePackageLost(seriesLen, series4.length, series4, data4, lostData4.index)
  }
  if (series5.length < seriesLen) {
    lostData5.isLost = true
    handlePackageLost(seriesLen, series5.length, series5, data5, lostData5.index)
  }
  
  handleSetSeries(setSeries, data1, data2, data3, data4, data5)
  handleSetLostData(setLostData, lostData1, lostData2, lostData3, lostData4, lostData5)
  handleSetCategories(setCategiries, seriesLen)
};


// ====================================== 2 TIENG ============================================//

const handleGetByTimeStamp2h = async (setSeries, setCategiries, setLostData, data) => {
  const series1 = data[0]
  const series2 = data[1]
  const series3 = data[2]
  const series4 = data[3]
  const series5 = data[4]

  let data1 = [series1[0].co2, ...series1.map(item => item.co2)]
  let data2 = [series2[0].co2, ...series2.map(item => item.co2)]
  let data3 = [series3[0].co2, ...series3.map(item => item.co2)]
  let data4 = [series4[0].co2, ...series4.map(item => item.co2)]
  let data5 = [series5[0].co2, ...series5.map(item => item.co2)]
  let lostData1 = {seriesName: "1mg", isLost: false, index: []}
  let lostData2 = {seriesName: "2mg", isLost: false, index: []}
  let lostData3 = {seriesName: "3mg", isLost: false, index: []}
  let lostData4 = {seriesName: "4mg", isLost: false, index: []}
  let lostData5 = {seriesName: "5mg", isLost: false, index: []}

  const seriesLen = 1200;

  if (series1.length < seriesLen) {
    lostData1.isLost = true
    handlePackageLost(seriesLen, series1.length, series1, data1, lostData1.index)
  }
  if (series2.length < seriesLen) {
    lostData2.isLost = true
    handlePackageLost(seriesLen, series2.length, series2, data2, lostData2.index)
  }
  if (series3.length < seriesLen) {
    lostData3.isLost = true
    handlePackageLost(seriesLen, series3.length, series3, data3, lostData3.index)
  }
  if (series4.length < seriesLen) {
    lostData4.isLost = true
    handlePackageLost(seriesLen, series4.length, series4, data4, lostData4.index)
  }
  if (series5.length < seriesLen) {
    lostData5.isLost = true
    handlePackageLost(seriesLen, series5.length, series5, data5, lostData5.index)
  }

  handleSetSeries(setSeries, data1, data2, data3, data4, data5)
  handleSetLostData(setLostData, lostData1, lostData2, lostData3, lostData4, lostData5)
  handleSetCategories(setCategiries, seriesLen)
};

// ============================================ 1 TIENG ===================================//

const handleGetByTimeStamp1h = async (setSeries, setCategiries, setLostData, data) => {
  const series1 = data[0]
  const series2 = data[1]
  const series3 = data[2]
  const series4 = data[3]
  const series5 = data[4]

  let data1 = [series1[0].co2, ...series1.map(item => item.co2)]
  let data2 = [series2[0].co2, ...series2.map(item => item.co2)]
  let data3 = [series3[0].co2, ...series3.map(item => item.co2)]
  let data4 = [series4[0].co2, ...series4.map(item => item.co2)]
  let data5 = [series5[0].co2, ...series5.map(item => item.co2)]
  let lostData1 = {seriesName: "1mg", isLost: false, index: []}
  let lostData2 = {seriesName: "2mg", isLost: false, index: []}
  let lostData3 = {seriesName: "3mg", isLost: false, index: []}
  let lostData4 = {seriesName: "4mg", isLost: false, index: []}
  let lostData5 = {seriesName: "5mg", isLost: false, index: []}

  const seriesLen = 600

  if (series1.length < seriesLen) {
    lostData1.isLost = true    
    handlePackageLost(seriesLen, series1.length, series1, data1, lostData1.index)
  }
  if (series2.length < seriesLen) {
    lostData2.isLost = true    
    handlePackageLost(seriesLen, series2.length, series2, data2, lostData2.index)
  }
  if (series3.length < seriesLen) {
    lostData3.isLost = true    
    handlePackageLost(seriesLen, series3.length, series3, data3, lostData3.index)
  }
  if (series4.length < seriesLen) {
    lostData4.isLost = true    
    handlePackageLost(seriesLen, series4.length, series4, data4, lostData4.index)
  }
  if (series5.length < seriesLen) {
    lostData5.isLost = true    
    handlePackageLost(seriesLen, series5.length, series5, data5, lostData5.index)
  }

  handleSetSeries(setSeries, data1, data2, data3, data4, data5)
  handleSetLostData(setLostData, lostData1, lostData2, lostData3, lostData4, lostData5)
  handleSetCategories(setCategiries, seriesLen)
};

export {
  handleGetByTimeStamp1h,
  handleGetByTimeStamp2h,
  handleGetByTimeStamp3h,
  handleCountAverageTime
};
