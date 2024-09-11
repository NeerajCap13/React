import { AppBar, Container, Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <AppBar
        sx={{
          height: "7vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          position: "sticky",
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
            <Typography component={Link} to={"/"} sx={{textDecoration:"none" , color:"white"}}>LOGO</Typography>
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
