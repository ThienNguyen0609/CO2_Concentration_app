import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useGetConcentrationQuery } from "../../../store/features/concentration/concentration";
import { setMBTimestamp3h, setMBTimestamp2h, setMBTimestamp1h } from "../../../services/timestamp";
import { useEffect, useState } from "react";
import { handleCountAverage } from "../../../services/surveyService";
import _ from "lodash";
import CO2Table from "./CO2Table/CO2Table";
import TemTable from "./TemTable/TemTable";
import HumTable from "./HumTable/HumTable";

const SurveyData = () => {
  const mode = useSelector((state) => state.mode.light);
  const data3 = useGetConcentrationQuery(setMBTimestamp3h)
  const data2 = useGetConcentrationQuery(setMBTimestamp2h)
  const data1 = useGetConcentrationQuery(setMBTimestamp1h)
  const [CO2Survey3h, setCO2Survey3h] = useState([])
  const [CO2Survey2h, setCO2Survey2h] = useState([])
  const [CO2Survey1h, setCO2Survey1h] = useState([])
  const [temSurvey, setTemSurvey] = useState([])
  const [humSurvey, setHumSurvey] = useState([])

  useEffect(() => {
    if(!data3.isLoading && !data2.isLoading && !data1.isLoading) {
      handleCountAverage(data3.data, setCO2Survey3h, "co2")
      handleCountAverage(data2.data, setCO2Survey2h, "co2")
      handleCountAverage(data1.data, setCO2Survey1h, "co2")
      handleCountAverage(data3.data, setTemSurvey, "temperature")
      handleCountAverage(data3.data, setHumSurvey, "humidity")
    }
  }, [!data3.data, !data2.data, !data1.data])
  return (
    <>
      <h1 style={{color: mode ? "#000" : "#fff"}} className="mb-3 mt-5">Data Survey</h1>
      <h2 style={{color: mode ? "#000" : "#fff", textDecoration: "underline"}} className="mb-3">TiO2 + MB</h2>
      <CO2Table survey={CO2Survey3h} title={"3H"} />
      <CO2Table survey={CO2Survey2h} title={"2H"} />
      <CO2Table survey={CO2Survey1h} title={"1H"} />
      <TemTable survey={temSurvey} />
      <HumTable survey={humSurvey} />
    </>
  );
};

export default SurveyData;
