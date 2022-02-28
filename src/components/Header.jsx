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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#637081",
  "&:hover": {
    backgroundColor: "#7C98B3",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Body Part</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Body Part"
              value={select}
              onChange={handleChange}
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
