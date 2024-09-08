import { Grid, Container,} from "@mui/material";
import React from "react";

const Landing = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item bgcolor={"blue"} xs={12} sm={6} md={6} lg={3} xl={6}>
          1
        </Grid>
        <Grid item bgcolor={"olive"} xs={12} sm={6} md={6} lg={3} xl={6}>
          2
        </Grid>
        <Grid item bgcolor={"Orange"} xs={12} sm={6} md={6} lg={3} xl={6}>
          3
        </Grid>
        <Grid item bgcolor={"purple"} xs={12} sm={6} md={6} lg={3} xl={6}>
          4
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
