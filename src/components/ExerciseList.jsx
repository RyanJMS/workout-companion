import React from "react";
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
import _ from "lodash";

const ExerciseList = ({ exercises }) => {
  const capitalize = (str, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
      match.toUpperCase()
    );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Container>
        <Grid container spacing={2} justify="center">
          {exercises?.map((exercise, index) => (
            <Grid item xs={12} md={3}>
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
