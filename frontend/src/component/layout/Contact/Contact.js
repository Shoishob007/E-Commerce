import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";
import { Call, EmailOutlined, Facebook } from "@material-ui/icons";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="subContactContainer">
        <EmailOutlined />
        <a className="mailBtn" href="mailto:shoishobahmed.bang@gmail.com">
          <Button>Email us at shoishobahmed.bang@gmail.com</Button>
        </a>
      </div>
      <div className="subContactContainer">
        <Facebook />
        <a className="mailBtn" href="https://www.facebook.com/">
          <Button>Find us at Facebook</Button>
        </a>
      </div>

      <div className="subContactContainer">
        <Call />
        <a className="mailBtn" href="tel:+8801405453554">
          <Button>Call us at +8801405453554</Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
