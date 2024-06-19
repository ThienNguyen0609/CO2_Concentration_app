import { getConcentrationByTimestamp } from "./concentration";

const handleGetByTimeStamp3h = async (setSeries, setCategiries) => {
  const timestampForSeries1 = {
    min: "2024-06-18T07:31:25.000Z",
    max: "2024-06-18T10:31:25.000Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-18T14:50:31.000Z",
    max: "2024-06-18T17:50:31.000Z",
  };
  // const timestampForSeries3 = {
  //   min: "2024-06-12T07:51:22.000Z",
  //   max: "2024-06-12T10:52:00.000Z"
  // }
  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  // const series3 = await getConcentrationByTimestamp(timestampForSeries3)
  console.log("3h series1:", series1);
  console.log("3h series2:", [...series2.filter(item => item.packageNumber > 1081 && item.packageNumber < 1358).map(item => item.co2)]);
  // console.log("series3:", series3)
  setSeries([
    {
      name: "1mg",
      data: [series1[0].co2, ...series1.map((item) => item.co2)],
    },
    {
      name: "2mg",
      data: [
        series2[0].co2, 
        ...series2.filter(item => item.packageNumber < 1081).map(item => item.co2), 
        null, 
        ...series2.filter(item => item.packageNumber > 1081 && item.packageNumber < 1358).map(item => item.co2),
        null,
        ...series2.filter(item => item.packageNumber > 1358).map(item => item.co2)
      ],
    },
    // {
    //   name: "3mg",
    //   data: [series3[0].co2, ...series2.map((item) => item.co2)],
    // },
  ]);
  const cate = [];
  let timestamp = 1704067200000;
  for (let i = 0; i < 1801; i++) {
    cate.push(timestamp);
    timestamp += 6000;
  }
  setCategiries(cate);
};

const handleGetByTimeStamp2h = async (setSeries, setCategiries) => {
  const timestampForSeries1 = {
    min: "2024-06-18T07:31:25.000Z",
    max: "2024-06-18T09:31:25.000Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-18T14:50:31.000Z",
    max: "2024-06-18T16:50:31.000Z",
  };
  // const timestampForSeries3 = {
  //   min: "2024-06-12T07:51:22.000Z",
  //   max: "2024-06-12T10:52:00.000Z"
  // }
  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  // const series3 = await getConcentrationByTimestamp(timestampForSeries3)
  console.log("2h series1:", series1);
  console.log("2h series2:", [...series2.filter(item => item.packageNumber < 1081).map(item => item.co2)]);
  // console.log("series3:", series3)
  setSeries([
    {
      name: "1mg",
      data: [series1[0].co2, ...series1.map((item) => item.co2)],
    },
    {
      name: "2mg",
      data: [
        series2[0].co2, 
        ...series2.filter(item => item.packageNumber < 1081).map(item => item.co2), 
        null, 
        ...series2.filter(item => item.packageNumber > 1081).map(item => item.co2)
      ],
    },
    // {
    //   name: "3mg",
    //   data: [series3[0].co2, ...series2.map((item) => item.co2)],
    // },
  ]);
  const cate = [];
  let timestamp = 1704067200000;
  for (let i = 0; i < 1201; i++) {
    cate.push(timestamp);
    timestamp += 6000;
  }
  setCategiries(cate);
};

const handleGetByTimeStamp1h = async (setSeries, setCategiries) => {
  const timestampForSeries1 = {
    min: "2024-06-18T07:31:25.000Z",
    max: "2024-06-18T08:31:25.000Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-18T14:50:31.000Z",
    max: "2024-06-18T15:50:31.000Z",
  };
  // const timestampForSeries3 = {
  //   min: "2024-06-12T07:51:22.000Z",
  //   max: "2024-06-12T10:52:00.000Z"
  // }
  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  // const series3 = await getConcentrationByTimestamp(timestampForSeries3)
  console.log("1h series1:", series1);
  console.log("1h series2:", series2);
  // console.log("series3:", series3)
  setSeries([
    {
      name: "1mg",
      data: [series1[0].co2, ...series1.map((item) => item.co2)],
    },
    {
      name: "2mg",
      data: [series2[0].co2, ...series2.map((item) => item.co2)],
    },
    // {
    //   name: "3mg",
    //   data: [series3[0].co2, ...series2.map((item) => item.co2)],
    // },
  ]);
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
