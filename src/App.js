import React, { useState } from "react";
import Header from "./components/Header";
import AboutCard from "./components/AboutCard";
import ExerciseList from "./components/ExerciseList";
import "./App.css";

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
    <div>
      <Header exercises={exercises} onTextChange={onTextChange} />
      {length === 0 && <AboutCard />}
      <ExerciseList />
    </div>
  );
};

export default App;
