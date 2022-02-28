import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
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
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Workout Companion
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "white" }}
              >
                Body Part
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Body Part"
                value={select}
                onChange={handleChange}
                style={{
                  backgroundColor: "#637081",
                  "&:hover": {
                    backgroundColor: "#7C98B3",
                  },
                  width: "200px",
                }}
              >
                <MenuItem value="back">Back</MenuItem>
                <MenuItem value="cardio">Cardio</MenuItem>
                <MenuItem value="chest">Chest</MenuItem>
                <MenuItem value="lower arms">Lower Arms</MenuItem>
                <MenuItem value="lower legs">Lower Legs</MenuItem>
                <MenuItem value="neck">Neck</MenuItem>
                <MenuItem value="shoulders">Shoulders</MenuItem>
                <MenuItem value="upper arms">Upper Arms</MenuItem>
                <MenuItem value="upper legs">Upper Legs</MenuItem>
                <MenuItem value="waist">Waist</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
