import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} alt="Logo" />

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello guest</span>
          <span className="header-optionLineTwo">Sign in</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        <div className="header-optionBasket">
          <ShoppingBasket />
          <span className="header-optionLineTwo header-basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
