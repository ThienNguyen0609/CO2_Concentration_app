import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { getConcentration } from "../../services/concentration";
import _ from "lodash";

function Data() {
  const [data, setData] = useState([])
  const mode = useSelector(state => state.mode.light);
  useEffect(() => {
    const handleGetConcentration = async () => {
      const response = await getConcentration()
      setData(response)
    }

    handleGetConcentration()
  }, [])
  return (
    <>
    {data && _.isEmpty(data) ? (
      <div>No Data</div>
    ) : (
    <Table striped bordered hover variant={mode ? "light" : "dark"}>
      <thead>
        <tr>
          <th>STT</th>
          <th>CO2</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index}</td>
                <td>{item.co2}</td>
                <td>{item.temperature}</td>
                <td>{item.humidity}</td>
                <td>{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
    </Table>
    )}
    </>
  );
}

export default Data;
