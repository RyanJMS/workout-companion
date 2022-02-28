import React from "react";
import { Grid, CssBaseline, Paper, Typography } from "@mui/material";

const AboutCard = () => {
  return (
    <Grid>
      <Grid item align="center">
        <CssBaseline />
        <Paper elevation={8} style={{ width: "50%" }}>
          <Typography variant="h6" align="center">
            Search for exercises by body part...
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutCard;