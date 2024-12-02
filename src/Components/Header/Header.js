import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../Assets/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="right_container">
          <ul>
            <li>
              {" "}
              <img src={logo} alt="logo" />{" "}
            </li>
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse My Language</li>
          </ul>
        </div>
      </div>
      <div className="left_container">
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
