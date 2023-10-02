import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import { Instagram, YouTube } from "@material-ui/icons";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/defglnost/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1637867664/avatars/dkc3zbboqbeafsjj3uya.png"
              alt="Founder"
            />
            <Typography>
              <b>Shoishob Ahmed</b>
            </Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This wesbite is made by Shoishob to learn MERN stack.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.youtube.com/" target="blank">
              <YouTube className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <Instagram className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
