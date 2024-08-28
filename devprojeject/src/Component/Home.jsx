import { AppBar, Container, Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <AppBar
        sx={{
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography>LOGO</Typography>
          </Box>
          <Box>
            <Button LinkComponent={Link} to="/login" variant="standard">
              Login
            </Button>
            <Button LinkComponent={Link} to="/register" variant="standard">
              Sign Up
            </Button>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
};

export default Home;
