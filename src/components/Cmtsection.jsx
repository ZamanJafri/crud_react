import React, { useContext } from "react";
import { StoreProvider } from "../contextapi/store";

const Cmtsection = () => {
  const { todos, deleteRecords } = useContext(StoreProvider);
  console.log(todos);
  return (
    <>
      <div className="list-container">
        <div className="responsive-table">
          <div className="header">
            <h3>User Data</h3>
            <form action="">
              <input type="search" />
              <label htmlFor="serach">Search</label>
            </form>
          </div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.uname}</td>
                  <td>{item.email}</td>
                  <td>
                    <img src={item.image} alt="" style={{ width: "150px" }} />
                  </td>
                  <td className="button">
                    <button className="btn btn-color">edit</button>
                    <button
                      className="btn btn-color"
                      onClick={() => {
                        deleteRecords(item);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cmtsection;
