import React from "react";
import Button from "@mui/material/Button";
import { Box,TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        background: "#faebd7",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          maxWidth: "390px",
          width: { xs: "300px", sm: "380px", md: "390px" },
          minHeight: "200px",
          backgroundColor: "#e3d4c1",
          margin: "auto 0",
          py: "10px",
          px: "10px",
          paddingBottom: "20px",
          borderRadius: "5px",
          textAlign:"center"
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: "Black" }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          type="username"
          
          sx={{
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        />
        <Button
          fullWidth
          sx={{
            backgroundColor: "#228b22",
            color: "Black",
            height: "50px",
            borderRadius: "5px",
            marginTop: "5px",
            marginBottom: "5px",
            width:"175px",
            "&:hover": { bgcolor: "#228b22" },
          }}
        >LOGIN
        </Button>
        <br />
        <Typography variant="h8" color={"purple"}>
          Forgot Password?
        </Typography>
        <br />
        <Typography variant="p">Don't Have Account?</Typography>{" "}
        <Typography
          variant="p"
          component={Link}
          to="/register"
          sx={{ color: "#228b22", textDecoration: "none" }}
        >
          SignUp
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
