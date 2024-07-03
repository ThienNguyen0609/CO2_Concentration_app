import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import _ from "lodash";

const CO2Table = ({survey}) => {
  const mode = useSelector((state) => state.mode.light);
  return (
    <>
      <h4 style={{color: mode ? "#000" : "#fff"}} className="mb-3">CO2</h4>
      <Table striped bordered hover variant={mode ? "light" : "dark"}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mass</th>
            <th>The First</th>
            <th>The Last</th>
            <th>Average CO2 Concentration</th>
          </tr>
        </thead>
        <tbody>
          {!_.isEmpty(survey) &&
            survey?.map((item, index) => {
              return (
                <tr key={item.mass}>
                  <td>{index}</td>
                  <td>{item.mass}</td>
                  <td>{item.first} ppm</td>
                  <td>{item.last} ppm</td>
                  <td>{item.average} ppm</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default CO2Table;
