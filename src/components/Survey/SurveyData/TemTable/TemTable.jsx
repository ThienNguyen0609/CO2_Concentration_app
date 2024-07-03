import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import _ from "lodash";

const TemTable = ({survey}) => {
  const mode = useSelector((state) => state.mode.light);
  return (
    <>
      <h4 style={{color: mode ? "#000" : "#fff"}} className="mb-3">Temperature</h4>
      <Table striped bordered hover variant={mode ? "light" : "dark"}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mass</th>
            <th>The First</th>
            <th>The Last</th>
            <th>Average Temperature</th>
          </tr>
        </thead>
        <tbody>
          {!_.isEmpty(survey) &&
            survey?.map((item, index) => {
              return (
                <tr key={item.mass}>
                  <td>{index}</td>
                  <td>{item.mass}</td>
                  <td>{item.first} ℃</td>
                  <td>{item.last} ℃</td>
                  <td>{item.average} ℃</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TemTable;
