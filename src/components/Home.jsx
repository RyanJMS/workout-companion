import React from "react";
import imageOne from "../assets/images/1.jpg";
import imageTwo from "../assets/images/2.jpg";
import imageThree from "../assets/images/3.jpg";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "../App.css";

const Home = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div container style={{ display: "flex", justifyContent: "center" }}>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
              data-interval="2000"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={imageOne}
                    class="d-block w-100"
                    alt="exercise"
                    height="500px"
                    width="400px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={imageTwo}
                    class="d-block w-100"
                    alt="..."
                    height="500px"
                    width="400px"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src={imageThree}
                    class="d-block w-100"
                    alt="..."
                    height="500px"
                    width="400px"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div container style={{ display: "flex", justifyContent: "center" }}>
            <Paper
              elevation={8}
              style={{
                width: "50%",
              }}
            >
              <Typography variant="h6" align="center">
                Explore exercises based on muscle groups
              </Typography>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
