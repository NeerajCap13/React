import { Grid, Container, Box } from "@mui/material";
import React from "react";

const Landing = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4  }}>
      <Grid container spacing={3} sx={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
        <Grid item>
          <Box bgcolor={"blue"} height={"100px"} width={"100px"}></Box>
        </Grid>
        <Grid item>
          <Box bgcolor={"Orange"} height={"100px"} width={"100px"}></Box>
        </Grid>
        <Grid item>
          <Box bgcolor={"Red"} height={"100px"} width={"100px"}></Box>
        </Grid>
        <Grid item>
          <Box bgcolor={"Coral"} height={"100px"} width={"100px"}></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
