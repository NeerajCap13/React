import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
          maxWidth: "490px",
          width: { xs: "300px", sm: "380px", md: "390px" },
          minHeight: "210px",
          backgroundColor: "#e3d4c1",
          margin: "auto 0",
          py: "8px",
          px: "16px",
          paddingBottom: "20px",
          borderRadius: "5px",
          textAlign:"center"
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: "Black" }}>
          Register
        </Typography>
        <TextField
          fullWidth
          label="Name"
          type="name"
          variant="outlined"
          sx={{
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          sx={{
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        />
        <TextField
          fullWidth
          label="Mobile Number"
          type="number"
          variant="outlined"
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
        <TextField
          fullWidth
          label="Confirm Password"
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
            color: "white",
            width:"175px",
            height: "50px",
            borderRadius: "5px",
            marginTop: "5px",
            marginBottom: "10px",
            "&:hover": { bgcolor: "#228b22" },
          }}
        >
          REGISTER
        </Button>
        <br />
        <Typography variant="p">Already have an Account?</Typography>{" "}
        <Typography
          variant="p"
          component={Link}
          to="/login"
          sx={{ color: "purple", textDecoration: "none" }}
        >
          Login
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
