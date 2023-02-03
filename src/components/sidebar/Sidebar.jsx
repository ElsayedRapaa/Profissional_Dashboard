import React from "react";
import "./sidebar.scss";
import SpeedIcon from "@mui/icons-material/Speed";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../reducer/ModeContext";

function Sidebar() {
  const [, dispatch] = useDarkMode();

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="logo">
          <h4>Dashboard</h4>
        </Link>
      </div>
      <nav className="center">
        <ul>
          <p className="title_Link">main</p>
          <Link to="/">
            <li>
              <SpeedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title_Link">lists</p>
          <Link to="/users">
            <li>
              <Person2OutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <StoreOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title_Link">useful</p>
          <li>
            <AutoGraphOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title_Link">service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title_Link">User</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
      <div className="bottom">
        <p className="title_Link">Mode</p>
        <div className="mode">
          <div
            className="color_Mode"
            onClick={() =>
              dispatch({
                type: "LIGHT",
                payload: false,
              })
            }
          ></div>
          <div
            className="color_Mode"
            onClick={() =>
              dispatch({
                type: "DARK",
                payload: true,
              })
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
