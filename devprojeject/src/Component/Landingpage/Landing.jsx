import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  Button,
  Divider,
  InputAdornment,
} from "@mui/material";

import loginImage from "../../Assets/images/login-illustrator.svg";
import { ReactComponent as EmailIcon } from "../../Assets/images/email.svg";
import { ReactComponent as PassIcon } from "../../Assets/images/pass.svg";
import React, { useState }  from "react";
import { Link } from "react-router-dom";



const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");

  const userInput = (e) => {
        setUser(e.target.value);
        console.log(e.target.value);
  }

  const passInput = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
}



  return (
    <Box
      sx={{
        height: "93vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isMobile ? (
        <>
          <Box
            sx={{
              height: "100%",
              width: "30vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "390px",
                margin: "auto 20",
                paddingBottom: "20px",
                borderRadius: "5px",
                textAlign: "center",
                padding: "30px",
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                DevLogix
              </Typography>
              <Typography variant="p" fontWeight={400}>
                Login into your account
              </Typography>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={user}
                onChange={userInput}
                fullWidth
                sx={{
                  mt: "20px",
                  mb: "10px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
              onChange={passInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PassIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Box textAlign={"right"}>
                <Typography variant="p" color={"#1E2772"} fontSize={14}>
                  Forget Password?
                </Typography>
              </Box>

              <Button
                fullWidth
                sx={{
                  color: "white",
                  bgcolor: "#FD7401",
                  borderRadius: "8px",
                  mt: "20px",
                  "&:hover": { bgcolor: "#FD7401" },
                }}
              >
                Login Now
              </Button>
              <br />

              <br />
              <Divider sx={{ fontSize: "10px", fontWeight: "500" }}>OR</Divider>
              <br />

              <Button
                fullWidth
                LinkComponent={Link}
                to="/"
                sx={{
                  color: "#FD7401",
                  borderRadius: "8px",
                  border: "0.5px solid #FD7401 ",
                }}
                
              >
                Signup Now
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "70vw",
              bgcolor: "#C2C2C2",
              textAlign: "center",
            }}
          >
            <img src={loginImage} alt="imag" />
          </Box>
        </>
      ) : (
        <Box sx={{ height: "100%", width: "100vw", display:"flex" ,justifyContent:"center",alignItems:"center" }}>
          <Box
            sx={{
              maxWidth: "390px",
              margin: "auto 20",
              paddingBottom: "20px",
              borderRadius: "5px",
              textAlign: "center",
              padding: "30px",
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              DevLogix
            </Typography>
            <Typography variant="p" fontWeight={600}>
              Login into your account
            </Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={user}
              onChange={userInput}
              fullWidth
              sx={{
                mt: "20px",
                mb: "10px",
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={passInput}
            />
            <Box textAlign={"right"}>
              <Typography variant="p" color={"#1E2772"}>
                Forget Password
              </Typography>
            </Box>

            <Button
              fullWidth
              sx={{
                color: "white",
                bgcolor: "#FD7401",
                borderRadius: "8px",
                mt: "20px",
                "&:hover": { bgcolor: "#FD7401" },
              }}
            >
              Login Now
            </Button>
            <br />

            <br />
            <Divider sx={{ fontSize: "10px", fontWeight: "500" }}>OR</Divider>
            <br />

            <Button
              fullWidth
              sx={{
                color: "#FD7401",
                borderRadius: "8px",
                border: "0.5px solid #FD7401 ",
              }}
            >
              Signup Now
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Landing;
