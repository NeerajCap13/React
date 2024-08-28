import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #000000, #434343)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          maxWidth: "590px",
          minHeight: "210px",
          backgroundColor: "#aca7cb",
          margin: "auto 0",
          py: "8px",
          px: "16px",
          paddingBottom: "20px",
          borderRadius: "5px",
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
            backgroundColor: "#ffd700",
            color: "white",
            height: "50px",
            borderRadius: "5px",
            marginTop: "5px",
            marginBottom: "10px",
            "&:hover": { bgcolor: "#ffea00" },
          }}
        >
          REGISTER
        </Button>
        <Typography variant="p">Already have an Account?</Typography>{" "}
        <Typography
          variant="p"
          component={Link}
          to="/login"
          sx={{ color: "#ffea00", textDecoration: "none" }}
        >
          Login
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
