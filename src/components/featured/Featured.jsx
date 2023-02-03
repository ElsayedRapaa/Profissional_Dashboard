import React from "react";
import "./featured.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <IconButton>
          <MoreVert className="vert_Icon" />
        </IconButton>
      </div>
      <div className="bottom">
        <div className="circule_Progress">
          <CircularProgressbar
            value={"60"}
            text="60%"
            strokeWidth={"4"}
            styles={buildStyles({
              pathColor: "#38b000",
              textColor: "#38b000",
            })}
          />
        </div>
        <div className="title">Total sales mode todat</div>
        <div className="money">$500</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magni
          tempore sunt nostrum rerum libero ipsa ut ex eaque sapiente.
        </div>
        <div className="items">
          <div className="item">
            <div className="item_Title">Target</div>
            <div className="item_Result negative">
              <KeyboardArrowDownOutlinedIcon /> $10.4K
            </div>
          </div>
          <div className="item">
            <div className="item_Title">Last Week</div>
            <div className="item_Result positive">
              <KeyboardArrowUpOutlinedIcon /> $10.4K
            </div>
          </div>
          <div className="item">
            <div className="item_Title">Last Month</div>
            <div className="item_Result positive">
              <KeyboardArrowUpOutlinedIcon /> $10.4K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
