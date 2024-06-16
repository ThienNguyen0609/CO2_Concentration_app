import { getConcentrationByTimestamp } from "./concentration";

const handleGetByTimeStamp3h = async (setSeries, setCategiries) => {
  const timestampForSeries1 = {
    min: "2024-06-15T14:19:05.000Z",
    max: "2024-06-15T17:19:05.999Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-16T05:19:03.000Z",
    max: "2024-06-16T08:19:03.000Z",
  };
  // const timestampForSeries3 = {
  //   min: "2024-06-12T07:51:22.000Z",
  //   max: "2024-06-12T10:52:00.000Z"
  // }
  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  // const series3 = await getConcentrationByTimestamp(timestampForSeries3)
//   console.log("series1:", series1);
//   console.log("series2:", series2);
  // console.log("series3:", series3)
  setSeries([
    {
      name: "1mg",
      data: [400, ...series1.map((item) => item.co2)],
    },
    {
      name: "2mg",
      data: [400, ...series2.map((item) => item.co2)],
    },
    // {
    //   name: "3mg",
    //   data: series3.filter((item, index) => index < 1978).map(item => item.co2),
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
    min: "2024-06-15T14:19:05.000Z",
    max: "2024-06-15T16:19:05.999Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-16T05:19:03.000Z",
    max: "2024-06-16T07:19:03.000Z",
  };
  // const timestampForSeries3 = {
  //   min: "2024-06-12T07:51:22.000Z",
  //   max: "2024-06-12T10:52:00.000Z"
  // }
  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  // const series3 = await getConcentrationByTimestamp(timestampForSeries3)
//   console.log("series1:", series1);
//   console.log("series2:", series2);
  // console.log("series3:", series3)
  setSeries([
    {
      name: "1mg",
      data: [400, ...series1.map((item) => item.co2)],
    },
    {
      name: "2mg",
      data: [400, ...series2.map((item) => item.co2)],
    },
    // {
    //   name: "3mg",
    //   data: series3.filter((item, index) => index < 1978).map(item => item.co2),
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
    min: "2024-06-15T14:19:05.000Z",
    max: "2024-06-15T15:19:05.999Z",
  };
  const timestampForSeries2 = {
    min: "2024-06-16T05:19:03.000Z",
    max: "2024-06-16T06:19:03.000Z",
  };
  // const timestampForSeries3 = {
  //   min: "2024-06-12T07:51:22.000Z",
  //   max: "2024-06-12T10:52:00.000Z"
  // }
  const series1 = await getConcentrationByTimestamp(timestampForSeries1);
  const series2 = await getConcentrationByTimestamp(timestampForSeries2);
  // const series3 = await getConcentrationByTimestamp(timestampForSeries3)
//   console.log("series1:", series1);
//   console.log("series2:", series2);
  // console.log("series3:", series3)
  setSeries([
    {
      name: "1mg",
      data: [400, ...series1.map((item) => item.co2)],
    },
    {
      name: "2mg",
      data: [400, ...series2.map((item) => item.co2)],
    },
    // {
    //   name: "3mg",
    //   data: series3.filter((item, index) => index < 1978).map(item => item.co2),
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
