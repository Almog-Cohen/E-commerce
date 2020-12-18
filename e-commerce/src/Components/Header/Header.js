import React from "react";
import "./Header.css";
import Logo from "./logoe.webp";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProivder";
import { auth } from "../../firebase";

const Header = ({ searchfield }) => {
  const [{ basket, user, searchText }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      // User signout
      auth.signOut();
    }
  };

  const onSearchChange = (e) => {
    dispatch({
      type: "SEARCH_ITEM",
      searchText: e.target.value,
    });
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="Logo" />
      </Link>
      <div className="header-search">
        {searchfield && (
          <div className="header-search">
            <input
              className="header-searchInput"
              type="text"
              value={searchText}
              placeholder="Search for products"
              onChange={onSearchChange}
            />
            <SearchIcon className="header-searchIcon" />
          </div>
        )}
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLineOne">
              Hello {user ? user.email : "Hello guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasket />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
