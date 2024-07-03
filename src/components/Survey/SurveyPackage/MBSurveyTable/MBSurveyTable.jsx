import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useGetConcentrationQuery } from "../../../../store/features/concentration/concentration";
import { setMBTimestamp3h } from "../../../../services/timestamp";
import { useEffect, useState } from "react";
import { handleGetPackageLost } from "../../../../services/surveyService";
import _ from "lodash";

const MBSurveyTable = () => {
  const mode = useSelector((state) => state.mode.light);
  const { data, error, isLoading } = useGetConcentrationQuery(setMBTimestamp3h)
  const [survey, setSurvey] = useState([])

  useEffect(() => {
    if(!error && !isLoading) {
        handleGetPackageLost(data, setSurvey)
    }
  }, [data])
  return (
    <>
      <h2 style={{color: mode ? "#000" : "#fff", textDecoration: "underline"}} className="mb-3">TiO2 + MB Package Survey</h2>
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

export default MBSurveyTable;
