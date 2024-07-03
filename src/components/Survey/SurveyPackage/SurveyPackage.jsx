import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useGetConcentrationQuery } from "../../../store/features/concentration/concentration";
import { setMBTimestamp3h } from "../../../services/timestamp";
import { useEffect, useRef, useState } from "react";
import { handleGetPackageLost } from "../../../services/surveyService";
import _ from "lodash";

const SurveyPackage = () => {
  const mode = useSelector((state) => state.mode.light);
  const mount = useRef(false)
  const { data, error, isLoading } = useGetConcentrationQuery(setMBTimestamp3h)
  const [survey, setSurvey] = useState([])

  useEffect(() => {
    if(!error && !isLoading && mount.current) {
        handleGetPackageLost(data[0], setSurvey, "1mg")
        handleGetPackageLost(data[1], setSurvey, "2mg")
        handleGetPackageLost(data[2], setSurvey, "3mg")
        handleGetPackageLost(data[3], setSurvey, "4mg")
        handleGetPackageLost(data[4], setSurvey, "5mg")
    }
    return () => mount.current = true
  }, [data])
  return (
    <>
      <h1 style={{color: mode ? "#000" : "#fff"}} className="mb-3">Package Survey</h1>
      <Table striped bordered hover variant={mode ? "light" : "dark"}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mass</th>
            <th>Average Time</th>
            <th>Lost Package</th>
            <th>Percent</th>
          </tr>
        </thead>
        <tbody>
          {!_.isEmpty(survey) &&
            survey?.map((item, index) => {
              return (
                <tr key={item.mass}>
                  <td>{index}</td>
                  <td>{item.mass}</td>
                  <td>{item.averageTime} ms</td>
                  <td>
                    {item.lostPackage !== null
                      ? item.lostPackage.join(", ")
                      : "x"}
                  </td>
                  <td>{item.percent}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default SurveyPackage;
