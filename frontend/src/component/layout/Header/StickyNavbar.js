import React, { useState } from "react";
import "./StickyNavbar.css";
import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaHome,
  FaProductHunt,
  FaInfoCircle,
  FaPhoneSquare,
} from "react-icons/fa";
import logo from "../../../images/logo1.png";
import { useNavigate } from "react-router-dom";

const Search = ({ searchVisible }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <div className={`mini-search-bar ${searchVisible ? "active" : ""}`}>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <div>
          <input
            type="text"
            className="searchbar"
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <input type="submit" value="Search" className="submitSearch" />
        </div>
      </form>
    </div>
  );
};

const StickyNavbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <nav className={`sticky-navbar ${menuVisible ? "active" : ""}`}>
      <div className="logo">
        <img
          onClick={navigateToHome}
          className="logoImage"
          src={logo}
          alt="Logo"
          style={{
            maxWidth: "120px",
            maxHeight: "60px",
            objectFit: "scale-down",
          }}
        />
      </div>
      <div className="icons">
        <span className="icon" onClick={navigateToLogin}>
          <FaUserCircle />
        </span>
        <span className="icon" onClick={navigateToCart}>
          <FaShoppingCart />
        </span>
        <span
          className={`icon ${searchVisible ? "active" : ""}`}
          onClick={toggleSearch}
        >
          <FaSearch />
        </span>

        <Search searchVisible={searchVisible} />
      </div>
      <div
        className={`menu-icon ${menuVisible ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <ul className={`menu ${menuVisible ? "active" : ""}`}>
        <li>
          <a href="/">
            <FaHome className="menu-icon-mobile" />
            <span className="menu-text">Home</span>
          </a>
        </li>
        <li>
          <a href="/products">
            <FaProductHunt className="menu-icon-mobile" />
            <span className="menu-text">Products</span>
          </a>
        </li>
        <li>
          <a href="/about">
            <FaInfoCircle className="menu-icon-mobile" />
            <span className="menu-text">About Us</span>
          </a>
        </li>
        <li>
          <a href="/contact">
            <FaPhoneSquare className="menu-icon-mobile" />
            <span className="menu-text">Contact Us</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default StickyNavbar;
