import React from "react";
import FormData from "form-data";
import { ChangeEvent, useState } from "react";
import axios from "axios";

import "./fvlog.css";
export default function FoodVlog() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [type, setType] = useState("customer");

  console.log(type);
  const upload = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("res", file);
    formdata.append("email", email);
    // formdata.append("password", password);
    // formdata.append("type", type);
    console.log(formdata);
    const uploadUrl = "http://localhost:4164/upload";
    let result = await axios.post(uploadUrl, formdata);
    console.log(result);
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row text-center mt-5">
        <div className="col-12">
          <h1 className="fv-heading mt-4">Foodies Feed</h1>
        </div>
      </div>
      <div className="row mb-5 mt-5 p-2 text-center">
        <div className="col-3">
          <label htmlFor="#cata">Type</label>
          <select
            name="category"
            id="cata"
            className="dropdown form-control"
            onChange={(e) => setType(e.target.value)}
          >
            {/* <option value=""></option> */}
            <option value="customer">Customer</option>
            <option value="restaurant">Restaurant</option>
          </select>
          <br />

          <label htmlFor="#email">Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="#password">Password</label>
          <input
            placeholder="enter Your password"
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
            value={password}
          />
        </div>
        <div className="col-6">
          <div className="fileUpload">
            <input
              type="file"
              name="foodvlog"
              id="fblog"
              onChange={(e) => {
                e.preventDefault();
                // console.log(e.target.files);
                setFile(e.target.files[0]);
              }}
            />

            <img src={file} alt="" id="imgPrev" />

            <input type="button" value="upload" onClick={(e) => upload(e)} />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

/*
import { ChangeEvent, useState } from 'react';

function FileUploadSingle() {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default FileUploadSingle; */
