import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useGetConcentrationQuery } from "../../../store/features/concentration/concentration";
import { setMBTimestamp3h } from "../../../services/timestamp";
import { useEffect, useRef, useState } from "react";
import { handleCountAverage } from "../../../services/surveyService";
import _ from "lodash";
import CO2Table from "./CO2Table/CO2Table";
import TemTable from "./TemTable/TemTable";
import HumTable from "./HumTable/HumTable";

const SurveyData = () => {
  const mode = useSelector((state) => state.mode.light);
  const mount = useRef(false)
  const { data, error, isLoading } = useGetConcentrationQuery(setMBTimestamp3h)
  const [CO2Survey, setCO2Survey] = useState([])
  const [temSurvey, setTemSurvey] = useState([])
  const [humSurvey, setHumSurvey] = useState([])

  useEffect(() => {
    if(!error && !isLoading && mount.current) {
        handleCountAverage(data[0], setCO2Survey, setTemSurvey, setHumSurvey, "1mg")
        handleCountAverage(data[1], setCO2Survey, setTemSurvey, setHumSurvey, "2mg")
        handleCountAverage(data[2], setCO2Survey, setTemSurvey, setHumSurvey, "3mg")
        handleCountAverage(data[3], setCO2Survey, setTemSurvey, setHumSurvey, "4mg")
        handleCountAverage(data[4], setCO2Survey, setTemSurvey, setHumSurvey, "5mg")
    }
    return () => mount.current = true
  }, [data])
  return (
    <>
      <h1 style={{color: mode ? "#000" : "#fff"}} className="mb-3 mt-5">Data Survey</h1>
      <h2 style={{color: mode ? "#000" : "#fff", textDecoration: "underline"}} className="mb-3">TiO2 + MB</h2>
      <CO2Table survey={CO2Survey} />
      <TemTable survey={temSurvey} />
      <HumTable survey={humSurvey} />
      <h2 style={{color: mode ? "#000" : "#fff", textDecoration: "underline"}} className="mb-3 mt-3">TiO2</h2>
    </>
  );
};

export default SurveyData;
