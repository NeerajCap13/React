import React from "react";
import Button from "@mui/material/Button";
import { Box, TextField, Typography } from "@mui/material";

const Login = () => {
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
          maxWidth: "1290px",
          minHeight: "200px",
          backgroundColor: "#faf8ff",
          margin: "auto 0",
          py: "10px",
          px: "10px",
          paddingBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: "Black" }}>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Username"
          type="username"
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
        <Button
          fullWidth
          sx={{
            backgroundColor: "#ffd700",
            color: "Black",
            height: "50px",
            borderRadius: "5px",
            marginTop: "5px",
            "&:hover": { bgcolor: "#ffea00" },
          }}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
