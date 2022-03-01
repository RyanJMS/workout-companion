import React, { useState } from "react";
import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList";
import Home from "./components/Home";
import FavouriteList from "./components/FavouriteList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [select, setSelect] = useState("");

  const fetchData = (searchString) => {
    fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchString}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key":
            "92fde71775msh41f0c9b7fb596d4p136847jsne0f47f0738ab",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );

  const handleChange = (event) => {
    setSelect(event.target.value);

    fetchData(event.target.value);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/exercises"
          element={
            <ExerciseList
              exercises={exercises}
              capitalize={capitalize}
              handleChange={handleChange}
              select={select}
            />
          }
        />
        <Route exact path="/favourites" element={<FavouriteList />} />
      </Routes>
    </Router>
  );
};

export default App;
