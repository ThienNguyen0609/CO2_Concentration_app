const handlePackageLost = (len, seriesLen, series, data) => {
  let quantityPackageLost = len - seriesLen
  let count = 1
  series.forEach((item, index, array) => {
    if (index + count <= item.packageNumber-1 && quantityPackageLost !== 0) {
      const boolen = array.some(i => i.packageNumber === index + 1);
      const findPackageLost = array.filter(i => i.packageNumber === index + 2);
      if (!boolen && findPackageLost.length < 2) {
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
const handleSetCategories = (setCategiries, quantityPackage) => {
  const cate = [];
  let timestamp = 1704067200000;
  for (let i = 0; i < quantityPackage + 1; i++) {
    cate.push(timestamp);
    timestamp += 6000;
  }
  setCategiries(cate);
}


// ====================================== 3 TIENG ============================================//
const handleGetByTimeStamp3h = async (setSeries, setCategiries, data) => {
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

  const seriesLen = 1800;

  if (series1.length < seriesLen) handlePackageLost(seriesLen, series1.length, series1, data1)
  if (series2.length < seriesLen) handlePackageLost(seriesLen, series2.length, series2, data2)
  if (series3.length < seriesLen) handlePackageLost(seriesLen, series3.length, series3, data3)
  if (series4.length < seriesLen) handlePackageLost(seriesLen, series4.length, series4, data4)
  if (series5.length < seriesLen) handlePackageLost(seriesLen, series5.length, series5, data5)
  
  handleSetSeries(setSeries, data1, data2, data3, data4, data5)
  handleSetCategories(setCategiries, seriesLen)
};


// ====================================== 2 TIENG ============================================//

const handleGetByTimeStamp2h = async (setSeries, setCategiries, data) => {
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

  const seriesLen = 1200;

  if (series1.length < seriesLen) handlePackageLost(seriesLen, series1.length, series1, data1)
  if (series2.length < seriesLen) handlePackageLost(seriesLen, series2.length, series2, data2)
  if (series3.length < seriesLen) handlePackageLost(seriesLen, series3.length, series3, data3)
  if (series4.length < seriesLen) handlePackageLost(seriesLen, series4.length, series4, data4)
  if (series5.length < seriesLen) handlePackageLost(seriesLen, series5.length, series5, data5)

  handleSetSeries(setSeries, data1, data2, data3, data4, data5)
  handleSetCategories(setCategiries, seriesLen)
};

// ============================================ 1 TIENG ===================================//

const handleGetByTimeStamp1h = async (setSeries, setCategiries, data) => {
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

  const seriesLen = 600

  if (series1.length < seriesLen) handlePackageLost(seriesLen, series1.length, series1, data1)
  if (series2.length < seriesLen) handlePackageLost(seriesLen, series2.length, series2, data2)
  if (series3.length < seriesLen) handlePackageLost(seriesLen, series3.length, series3, data3)
  if (series4.length < seriesLen) handlePackageLost(seriesLen, series4.length, series4, data4)
  if (series5.length < seriesLen) handlePackageLost(seriesLen, series5.length, series5, data5)

  handleSetSeries(setSeries, data1, data2, data3, data4, data5)
  handleSetCategories(setCategiries, seriesLen)
};

export {
  handleGetByTimeStamp1h,
  handleGetByTimeStamp2h,
  handleGetByTimeStamp3h,
};
