import Table from "react-bootstrap/Table";
import { useGetConcentrationQuery } from "../../store/features/concentration/concentration";

function Data() {
  const { data, isFetching, isLoading } = useGetConcentrationQuery();

  console.log(data)

  if (isLoading) return <div style={{color: "#fff"}}>Loading...</div>;
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>STT</th>
          <th>CO2</th>
          <th>Temperature</th>
          <th>Humidity</th>
        </tr>
      </thead>
      {isFetching ? (
        "Fetching..."
      ) : (
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index}</td>
                <td>{item.co2}</td>
                <td>{item.temperature}</td>
                <td>{item.humidity}</td>
              </tr>
            );
          })}
        </tbody>
      )}
    </Table>
  );
}

export default Data;
