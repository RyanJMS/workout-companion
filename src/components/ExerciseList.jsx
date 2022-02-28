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
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const ExerciseList = ({ exercises, capitalize }) => {
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
      <CssBaseline />
      <Container>
        <Grid container spacing={2} justify="center">
          {exercises?.map((exercise, index) => (
            <Grid item xs={12} sm={6} md={3} data-aos="fade-in">
              <Card elevation={6} className="card" style={{ height: 400 }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    style={{ height: 250, width: 250 }}
                    image={exercise.gifUrl}
                    alt={exercise.name}
                    key={index}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" align="center">
                    {capitalize(exercise.name)}
                  </Typography>
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
