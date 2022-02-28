import React, { useState } from "react";

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
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return <div>App</div>;
};

export default App;
