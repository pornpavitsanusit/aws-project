import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({ Items: [] });

  const fetchData = async () => {
    const result = await axios(
      "https://7jyxo8xz19.execute-api.ap-southeast-1.amazonaws.com/items"
    );
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <center>
        <table>
          <tr>
            <th>ID</th>
          </tr>
          {data.Items.map(function (data) {
            return (
              <tr>
                <td>
                  <p>{data.id}</p>
                </td>
                {/* <td>
                  <p>{data.LatestGreetingTime}</p>
                </td> */}
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
}

export default App;
