import React, { useState } from "react";
import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");
  const [timeoutId, updateTimeoutId] = useState();

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
        console.log(data);
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

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    setSearch(event.target.value);
    const timeout = setTimeout(
      () => fetchData(event.target.value.toLowerCase()),
      500
    );
    updateTimeoutId(timeout);
  };
  let length = search.length;
  return (
    <Router basename="/">
      <Header onTextChange={onTextChange} />

      <ExerciseList
        exercises={exercises}
        capitalize={capitalize}
        length={length}
      />
    </Router>
  );
};

export default App;
