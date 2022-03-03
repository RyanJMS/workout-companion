import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList";
import Home from "./components/Home";
import FavouriteList from "./components/FavouriteList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [select, setSelect] = useState("");

  const mybutton = document.querySelector(".scrollBtn");

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

  useEffect(() => {
    const exerciseFavourites = JSON.parse(localStorage.getItem("favourites"));
    try {
      let length = exerciseFavourites.length;
      if (length > 0) {
        setFavourites(exerciseFavourites);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };

  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );

  const handleChange = (event) => {
    setSelect(event.target.value);

    fetchData(event.target.value);
  };

  const addFavouriteExercise = (exercise) => {
    const newFavouritesList = favourites;
    newFavouritesList?.push(exercise);
    saveToLocalStorage(newFavouritesList);
    setFavourites(newFavouritesList);
  };

  const removeFavouriteExercise = (exercise) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.id !== exercise.id
    );
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/exercises"
          element={
            <ExerciseList
              exercises={exercises}
              capitalize={capitalize}
              handleChange={handleChange}
              select={select}
              addFavouriteExercise={addFavouriteExercise}
              scrollToTop={scrollToTop}
            />
          }
        />
        <Route
          exact
          path="/favourites"
          element={
            <FavouriteList
              favourites={favourites}
              capitalize={capitalize}
              removeFavouriteExercise={removeFavouriteExercise}
              scrollToTop={scrollToTop}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
