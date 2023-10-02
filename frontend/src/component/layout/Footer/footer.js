import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logo1.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Assuming you want to use Font Awesome icons
import "./footer.css";

const footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>

      <div className="midFooter">
        <img src={logo} alt="logo" />
        <p>High quality is our first priorirty</p>

        <p>Copyrights 2023 &copy; Shoishob Al-Baki</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us On</h4>
        <a href="http://instagram.com">
          Instagram <FaInstagram />{" "}
        </a>
        <a href="http://facebook.com">
          Facebook <FaFacebook />{" "}
        </a>
        <a href="http://youtube.com">
          YouTube <FaYoutube />{" "}
        </a>
      </div>
    </footer>
  );
};

export default footer;
