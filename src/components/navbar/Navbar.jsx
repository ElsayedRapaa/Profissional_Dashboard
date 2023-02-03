import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { Badge } from "@mui/material";
import { useDarkMode } from "../../reducer/ModeContext";

function Navbar() {
  const [{ darkMode }, dispatch] = useDarkMode();

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search_Box">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="search_Icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            {darkMode ? (
              <LightModeIcon
                className="icon light"
                onClick={() =>
                  dispatch({
                    type: "LIGHT",
                    payload: false,
                  })
                }
              />
            ) : (
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() =>
                  dispatch({
                    type: "DARK",
                    payload: true,
                  })
                }
              />
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <Badge badgeContent={8} className="item" color="error">
            <NotificationsOutlinedIcon />
          </Badge>
          <Badge badgeContent={4} className="item" color="error">
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/321204189_226866106351533_209637843501414351_n.jpg?ccb=11-4&oh=01_AdQHrPyQ1NpjiNRdAyzfOyZXxakLlfL4ZpmVxHJ-l4PtwQ&oe=63E33DDC"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
