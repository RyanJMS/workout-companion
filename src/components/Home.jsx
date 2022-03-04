import React from "react";
import { Typography } from "@mui/material";
import "../App.css";
import bg from "../assets/images/bg.png";

const Home = () => {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="container"
      >
        <img src={bg} alt="background" height="1000px" width="1000px" />
        <Typography variant="h4" align="center" className="centered">
          Explore exercises based on muscle groups
        </Typography>
      </div>
    </div>
  );
};

export default Home;
