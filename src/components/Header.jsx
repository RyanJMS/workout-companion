import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header({ onTextChange, handleChange, select }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#536B78",
          marginBottom: "20px",
          paddingTop: "5px",
        }}
        className="appbar"
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              margin: "auto",
            }}
          >
            <Link to="/" className="link">
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              >
                Workout Companion
              </Typography>
            </Link>
            <Link to="/exercises" className="link">
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              >
                Exercises
              </Typography>
            </Link>
            <Link to="/favourites" className="link">
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              >
                Favourites
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
