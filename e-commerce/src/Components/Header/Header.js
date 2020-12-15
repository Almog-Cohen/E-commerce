import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProivder";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="Logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <span className="header-optionLineOne">Hello guest</span>
            <span className="header-optionLineTwo">Sign in</span>
          </div>
        </Link>
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
          <span className="header-optionLineTwo header-basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
