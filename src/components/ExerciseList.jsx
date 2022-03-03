import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CssBaseline,
  Container,
  FormControl,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import StarIcon from "@mui/icons-material/Star";

const ExerciseList = ({
  exercises,
  capitalize,
  select,
  handleChange,
  addFavouriteExercise,
}) => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div
        style={{
          display: "flex",
          margin: "auto",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Muscle Group"
            value={select}
            onChange={handleChange}
            style={{
              backgroundColor: "#7C98B3",
              "&:hover": {
                backgroundColor: "#7C98B3",
              },

              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",
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

      <CssBaseline />
      <Container style={{ marginBottom: "20px" }}>
        <Grid container spacing={2} justifyContent="center">
          {exercises?.map((exercise, index) => (
            <Grid item xs={12} sm={6} md={3} data-aos="fade-in">
              <Card
                key={index}
                elevation={6}
                className="card"
                style={{ height: "500px" }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    style={{ height: 250, width: 250 }}
                    image={exercise.gifUrl}
                    alt={exercise.name}
                    description={exercise.name}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" align="center">
                    {capitalize(exercise.name)}
                  </Typography>
                </CardContent>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={() => addFavouriteExercise(exercise)}>
                      Add to Favourites
                      <StarIcon />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExerciseList;
