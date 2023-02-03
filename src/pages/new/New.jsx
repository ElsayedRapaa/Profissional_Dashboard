import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Button, TextField } from "@mui/material";

function New({ inputs, title }) {
  const [file, setFile] = useState("");

  return (
    <div className="new_User">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="newUser_Container">
        <Navbar />
        <div className="top">
          <div className="title">{title}</div>
        </div>
        <div className="bottom">
          <div className="left">
            {file ? (
              <div className="img_Box">
                <img
                  src={URL.createObjectURL(file)}
                  alt="img"
                  className="img"
                />
              </div>
            ) : (
              <div className="photo">
                <CameraAltIcon className="icon" />
                <span>NO IMAGE</span>
              </div>
            )}
          </div>
          <div className="right">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form_Input">
                <label htmlFor="file" className="file">
                  <CloudUploadOutlinedIcon className="upload_Icon" />
                  Image
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  hidden
                />
              </div>
              {inputs.map((input) => (
                <div className="form_Input" key={input.id}>
                  <TextField
                    id="standard-username-input"
                    label={<label className="label">{input.label}</label>}
                    variant="standard"
                    type={`${input.type === "password" && "password"}`}
                    className="input"
                    fullWidth
                  />
                </div>
              ))}
              {/* <div className="form_Input">
                <TextField
                  id="standard-surname-input"
                  label="Name and surname"
                  variant="standard"
                  className="input"
                  fullWidth
                />
              </div>
              <div className="form_Input">
                <TextField
                  id="standard-email-input"
                  label="Email"
                  type="email"
                  variant="standard"
                  className="input"
                  fullWidth
                />
              </div>
              <div className="form_Input">
                <TextField
                  id="standard-phone-input"
                  label="Phone"
                  variant="standard"
                  className="input"
                  fullWidth
                />
              </div>
              <div className="form_Input">
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  className="input"
                  fullWidth
                />
              </div>
              <div className="form_Input">
                <TextField
                  id="standard-address-input"
                  label="Address"
                  variant="standard"
                  className="input"
                  fullWidth
                />
              </div>
              <div className="form_Input">
                <TextField
                  id="standard-country-input"
                  label="Country"
                  variant="standard"
                  className="input"
                  fullWidth
                />
              </div> */}
              <div className="button_Box">
                <Button
                  className="button"
                  size="large"
                  sx={{
                    backgroundColor: "green",
                    color: "white",
                    width: "150px",
                    margin: "10px 0 20px",
                  }}
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
