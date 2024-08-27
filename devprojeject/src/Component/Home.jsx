import { AppBar, Container, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <AppBar
        sx={{
          height: "50px",
        }}
      >
        <Container>
          <Typography
            variant="h6"
            color="white"
            sx={{
              textAlign: "center",
              py: "6px",
            }}
          >
            Login
          </Typography>
        </Container>
      </AppBar>
    </div>
  );
};

export default Home;
