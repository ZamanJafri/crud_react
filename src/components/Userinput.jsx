import React, { useContext, useState } from "react";
import { StoreProvider } from "../contextapi/store";

const Userinput = () => {
  const initialValue = {
    uname: "",
    email: "",
    image: "",
  };
  const { addRecords } = useContext(StoreProvider);
  const [data, setData] = useState(initialValue);

  const { uname, email, image } = data;

  const handleInput = (e) => {
    // console.log(e.target.type);
    if (e.target.type === "file") {
      setData((values) => ({
        ...values,
        // URL.createObjectURL() is used to convert a file into url 
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setData((values) => ({
        ...values,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const submit = (event) => {
    event.preventDefault();
    addRecords(data);
    setData("");
  };
  return (
    <>
      <div className="form-container">
        <div className="text-container">
          <h1>Kindly Share Your Feedback</h1>
        </div>
        <form action="" onSubmit={submit}>
          <label htmlFor="username">Write Your Good Name</label>
          <br />
          <input
            type="text"
            name="uname"
            autoComplete="off"
            placeholder="username"
            value={uname || ""}
            onChange={handleInput}
          />
          <br />

          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="email"
            value={email || ""}
            onChange={handleInput}
          />
          <br />

          <label htmlFor="image">Upload Image</label>
          <br />
          <input
            type="file"
            name="image"
            autoComplete="off"
            // value={image}
            onChange={handleInput}
          />
          {/* <img src={image} alt="" /> */}
          <br />

          <button type="submit" className="btn-form">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Userinput;
