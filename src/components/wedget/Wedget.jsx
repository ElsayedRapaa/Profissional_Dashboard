import React from "react";
import "./wedget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

function Wedget({ type }) {
  let data;
  const money = 100;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "user",
        icon: <PersonOutlineOutlinedIcon className="icon icon_User" />,
        link: "See All Users",
        isMoney: false,
      };
      break;
    case "orders":
      data = {
        title: "orders",
        icon: <ShoppingCartOutlinedIcon className="icon icon_Order" />,
        link: "See All Users",
        isMoney: false,
      };
      break;
    case "erarnings":
      data = {
        title: "eranings",
        icon: <PaidOutlinedIcon className="icon icon_Eraning" />,
        link: "See All Users",
        isMoney: true,
      };
      break;
    case "balance":
      data = {
        title: "balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon className="icon icon_Palance" />
        ),
        link: "See All Users",
        isMoney: true,
      };
      break;
    default:
      break;
  }

  return (
    <div className="wedget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="count">
          {data.isMoney && "$"} {money}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <span className="persentage negative">
          <KeyboardArrowUpOutlinedIcon className="icon" /> {diff}%
        </span>
        <span className={`icon_Box ${data.title}`}>{data.icon}</span>
      </div>
    </div>
  );
}

export default Wedget;
