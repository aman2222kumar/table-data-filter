import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./App.css";
import "./main.css";
import fetchData from "./api";
function App() {
  const dispatch = useDispatch();
  const data_selector = useSelector((state) => state.apiData);
  console.log(data_selector);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <header>
        <h1>Table Data</h1>
      </header>
      <main className="table_container">
        {data_selector.loading === true ? (
          <>
            <div className="spinner"></div>
          </>
        ) : (
          <div className="tableData">
            <input
              type="text"
              onChange={handleChange}
              value={search}
              placeholder="search according to name"
            ></input>
            <table>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>City</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Zipcode</th>
                </tr>
              </thead>
              <tbody>
                {data_selector.data.map((item, index) => {
                  if (search === "") {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.address.city}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.zipcode}</td>
                      </tr>
                    );
                  } else if (
                    item.name
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase())
                  ) {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.address.city}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.zipcode}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
