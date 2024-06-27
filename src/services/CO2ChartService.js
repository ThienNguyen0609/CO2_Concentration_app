import { getConcentrationByTimestamp } from "./concentration";

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

const handleGetByTimeStamp3h = async (setSeries, setCategiries, setLostData) => {
  // ---------------------------------------- Test -----------------------------------------//

  // const timestampForSeries1 = {
  //   min: "2024-06-18T07:31:25.000Z",
  //   max: "2024-06-18T10:31:25.000Z",
  // };
  // const timestampForSeries2 = {
  //   min: "2024-06-18T14:50:31.000Z",
  //   max: "2024-06-18T17:50:31.000Z",
  // };
  // const timestampForSeries3 = {
  //   min: "2024-06-19T13:55:32.000Z",
  //   max: "2024-06-19T16:55:32.000Z"
  // }
  // const timestampForSeries4 = {
  //   min: "2024-06-20T05:07:17.000Z",
  //   max: "2024-06-20T08:07:17.000Z"
  // }
  // const timestampForSeries5 = {
  //   min: "2024-06-20T10:24:50.000Z",
  //   max: "2024-06-20T13:24:50.000Z"
  // }


  // -------------------------------- Real ---------------------------------//
  const timestampForSeries1 = {
    min: "2024-06-25T07:24:13.000Z",
    max: "2024-06-25T10:24:13.000Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-25T13:59:42.000Z",
    max: "2024-06-25T16:59:42.000Z",
  };
  const timestampForSeries3 = {
    min: "2024-06-26T07:26:54.000Z",
    max: "2024-06-26T10:26:54.000Z"
  }
  const timestampForSeries4 = {
    min: "2024-06-26T01:39:44.000Z",
    max: "2024-06-26T04:39:44.000Z"
  }
  const timestampForSeries5 = {
    min: "2024-06-24T14:41:26.000Z",
    max: "2024-06-24T17:41:26.000Z"
  }

  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  let data1 = [series1[0].co2, ...series1.map(item => item.co2)]
  let lostData1 = {
    seriesName: "series1",
    isLost: false,
    index: []
  }
  if (series1.length < 1800) {
    lostData1.isLost = true
    handlePackageLost(1800, series1.length, series1, data1, lostData1.index)
  }

  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  let data2 = [series2[0].co2, ...series2.map(item => item.co2)]
  let lostData2 = {
    seriesName: "series2",
    isLost: false,
    index: []
  }
  if (series2.length < 1800) {
    lostData2.isLost = true
    handlePackageLost(1800, series2.length, series2, data2, lostData2.index)
  }

  const series3 = await getConcentrationByTimestamp(timestampForSeries3);
  console.log(series3)
  let data3 = [series3[0].co2, ...series3.map(item => item.co2)]
  let lostData3 = {
    seriesName: "series3",
    isLost: false,
    index: []
  }
  if (series3.length < 1800) {
    lostData3.isLost = true
    handlePackageLost(1800, series3.length, series3, data3, lostData3.index)
  }

  const series4 = await getConcentrationByTimestamp(timestampForSeries4);
  let data4 = [series4[0].co2, ...series4.map(item => item.co2)]
  let lostData4 = {
    seriesName: "series4",
    isLost: false,
    index: []
  }
  if (series4.length < 1800) {
    lostData4.isLost = true
    handlePackageLost(1800, series4.length, series4, data4, lostData4.index)
  }

  const series5 = await getConcentrationByTimestamp(timestampForSeries5);
  let data5 = [series5[0].co2, ...series5.map(item => item.co2)]
  let lostData5 = {
    seriesName: "series5",
    isLost: false,
    index: []
  }
  if (series5.length < 1800) {
    lostData5.isLost = true
    handlePackageLost(1800, series5.length, series5, data5, lostData5.index)
  }
  
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
  setLostData([
    lostData1.isLost ? lostData1 : null,
    lostData2.isLost ? lostData2 : null,
    lostData3.isLost ? lostData3 : null,
    lostData4.isLost ? lostData4 : null,
    lostData5.isLost ? lostData5 : null,
  ])
  const cate = [];
  let timestamp = 1704067200000;
  for (let i = 0; i < 1801; i++) {
    cate.push(timestamp);
    timestamp += 6000;
  }
  setCategiries(cate);
};


// ====================================== 2 TIENG ============================================//

const handleGetByTimeStamp2h = async (setSeries, setCategiries, setLostData) => {
  // ---------------------------------------- Test -----------------------------------------//

  // const timestampForSeries1 = {
  //   min: "2024-06-18T07:31:25.000Z",
  //   max: "2024-06-18T09:31:25.000Z",
  // };
  // const timestampForSeries2 = {
  //   min: "2024-06-18T14:50:31.000Z",
  //   max: "2024-06-18T16:50:31.000Z",
  // };
  // const timestampForSeries3 = {
  //   min: "2024-06-19T13:55:32.000Z",
  //   max: "2024-06-19T15:55:32.000Z"
  // }
  // const timestampForSeries4 = {
  //   min: "2024-06-20T05:07:17.000Z",
  //   max: "2024-06-20T07:07:17.000Z"
  // }
  // const timestampForSeries5 = {
  //   min: "2024-06-20T10:24:50.000Z",
  //   max: "2024-06-20T12:24:50.000Z"
  // }


  // -------------------------------- Real ---------------------------------//

  const timestampForSeries1 = {
    min: "2024-06-25T07:24:13.000Z",
    max: "2024-06-25T09:24:13.000Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-25T13:59:42.000Z",
    max: "2024-06-25T15:59:42.000Z",
  };
  const timestampForSeries3 = {
    min: "2024-06-26T07:26:54.000Z",
    max: "2024-06-26T09:26:54.000Z"
  }
  const timestampForSeries4 = {
    min: "2024-06-26T01:39:44.000Z",
    max: "2024-06-26T03:39:44.000Z"
  }
  const timestampForSeries5 = {
    min: "2024-06-24T14:41:26.000Z",
    max: "2024-06-24T16:41:26.000Z"
  }


  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  let data1 = [series1[0].co2, ...series1.map(item => item.co2)]
  let lostData1 = {
    seriesName: "series1",
    isLost: false,
    index: []
  }
  if (series1.length < 1200) {
    lostData1.isLost = true
    handlePackageLost(1200, series1.length, series1, data1, lostData1.index)
  }

  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  let data2 = [series2[0].co2, ...series2.map(item => item.co2)]
  let lostData2 = {
    seriesName: "series2",
    isLost: false,
    index: []
  }
  if (series2.length < 1200) {
    lostData2.isLost = true
    handlePackageLost(1200, series2.length, series2, data2, lostData2.index)
  }

  const series3 = await getConcentrationByTimestamp(timestampForSeries3);
  let data3 = [series3[0].co2, ...series3.map(item => item.co2)]
  let lostData3 = {
    seriesName: "series3",
    isLost: false,
    index: []
  }
  if (series3.length < 1200) {
    lostData3.isLost = true
    handlePackageLost(1200, series3.length, series3, data3, lostData3.index)
  }

  const series4 = await getConcentrationByTimestamp(timestampForSeries4);
  let data4 = [series4[0].co2, ...series4.map(item => item.co2)]
  let lostData4 = {
    seriesName: "series4",
    isLost: false,
    index: []
  }
  if (series4.length < 1200) {
    lostData4.isLost = true
    handlePackageLost(1200, series4.length, series4, data4, lostData4.index)
  }

  const series5 = await getConcentrationByTimestamp(timestampForSeries5);
  let data5 = [series5[0].co2, ...series5.map(item => item.co2)]
  let lostData5 = {
    seriesName: "series5",
    isLost: false,
    index: []
  }
  if (series5.length < 1200) {
    lostData5.isLost = true
    handlePackageLost(1200, series5.length, series5, data5, lostData5.index)
  }

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
  setLostData([
    lostData1.isLost ? lostData1 : null,
    lostData2.isLost ? lostData2 : null,
    lostData3.isLost ? lostData3 : null,
    lostData4.isLost ? lostData4 : null,
    lostData5.isLost ? lostData5 : null,
  ])
  const cate = [];
  let timestamp = 1704067200000;
  for (let i = 0; i < 1201; i++) {
    cate.push(timestamp);
    timestamp += 6000;
  }
  setCategiries(cate);
};

// ============================================ 1 TIENG ===================================//

const handleGetByTimeStamp1h = async (setSeries, setCategiries, setLostData) => {
  // ---------------------------------------- Test -----------------------------------------//

  // const timestampForSeries1 = {
  //   min: "2024-06-18T07:31:25.000Z",
  //   max: "2024-06-18T08:31:25.000Z",
  // };
  // const timestampForSeries2 = {
  //   min: "2024-06-18T14:50:31.000Z",
  //   max: "2024-06-18T15:50:31.000Z",
  // };
  // const timestampForSeries3 = {
  //   min: "2024-06-19T13:55:32.000Z",
  //   max: "2024-06-19T14:55:32.000Z"
  // }
  // const timestampForSeries4 = {
  //   min: "2024-06-20T05:07:17.000Z",
  //   max: "2024-06-20T06:07:17.000Z"
  // }
  // const timestampForSeries5 = {
  //   min: "2024-06-20T10:24:50.000Z",
  //   max: "2024-06-20T11:24:50.000Z"
  // }


  // -------------------------------- Real ---------------------------------//
  const timestampForSeries1 = {
    min: "2024-06-25T07:24:13.000Z",
    max: "2024-06-25T08:24:13.000Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-25T13:59:42.000Z",
    max: "2024-06-25T14:59:42.000Z",
  };
  const timestampForSeries3 = {
    min: "2024-06-26T07:26:54.000Z",
    max: "2024-06-26T08:26:54.000Z"
  }
  const timestampForSeries4 = {
    min: "2024-06-26T01:39:44.000Z",
    max: "2024-06-26T02:39:44.000Z"
  }
  const timestampForSeries5 = {
    min: "2024-06-24T14:41:26.000Z",
    max: "2024-06-24T15:41:26.000Z"
  }

  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  let data1 = [series1[0].co2, ...series1.map(item => item.co2)]
  let lostData1 = {
    seriesName: "series1",
    isLost: false,
    index: []
  }
  if (series1.length < 600) {
    lostData1.isLost = true    
    handlePackageLost(600, series1.length, series1, data1, lostData1.index)
  }

  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  let data2 = [series2[0].co2, ...series2.map(item => item.co2)]
  let lostData2 = {
    seriesName: "series2",
    isLost: false,
    index: []
  }
  if (series2.length < 600) {
    lostData2.isLost = true    
    handlePackageLost(600, series2.length, series2, data2, lostData2.index)
  }

  const series3 = await getConcentrationByTimestamp(timestampForSeries3);
  let data3 = [series3[0].co2, ...series3.map(item => item.co2)]
  let lostData3 = {
    seriesName: "series3",
    isLost: false,
    index: []
  }
  if (series3.length < 600) {
    lostData3.isLost = true    
    handlePackageLost(600, series3.length, series3, data3, lostData3.index)
  }

  const series4 = await getConcentrationByTimestamp(timestampForSeries4);
  let data4 = [series4[0].co2, ...series4.map(item => item.co2)]
  let lostData4 = {
    seriesName: "series4",
    isLost: false,
    index: []
  }
  if (series4.length < 600) {
    lostData4.isLost = true    
    handlePackageLost(600, series4.length, series4, data4, lostData4.index)
  }

  const series5 = await getConcentrationByTimestamp(timestampForSeries5);
  let data5 = [series5[0].co2, ...series5.map(item => item.co2)]
  let lostData5 = {
    seriesName: "series5",
    isLost: false,
    index: []
  }
  if (series5.length < 600) {
    lostData5.isLost = true    
    handlePackageLost(600, series5.length, series5, data5, lostData5.index)
  }

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
  setLostData([
    lostData1.isLost ? lostData1 : null,
    lostData2.isLost ? lostData2 : null,
    lostData3.isLost ? lostData3 : null,
    lostData4.isLost ? lostData4 : null,
    lostData5.isLost ? lostData5 : null,
  ])
  const cate = [];
  let timestamp = 1704067200000;
  for (let i = 0; i < 601; i++) {
    cate.push(timestamp);
    timestamp += 6000;
  }
  setCategiries(cate);
};

export {
  handleGetByTimeStamp1h,
  handleGetByTimeStamp2h,
  handleGetByTimeStamp3h,
};
