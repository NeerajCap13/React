import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import loginImage from "../../Assets/images/login-illustrator.svg";
import { ReactComponent as EmailIcon } from "../../Assets/images/email.svg";
import { ReactComponent as PassIcon } from "../../Assets/images/pass.svg";
import {ReactComponent as Mobile} from "../../Assets/images/Mobile.svg";
import {ReactComponent as Person} from "../../Assets/images/Person.svg";





const NewRegister = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
              width: "70vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#C2C2C2",
            }}
          >
            <img src={loginImage} alt="imag" />
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "30vw",
              textAlign: "center",
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
                Register to DevLogix Account
              </Typography>
              <TextField
                id="outlined-basic"
                label="FullName"
                variant="outlined"
                fullWidth
                sx={{
                  mt: "20px",
                  mb: "10px",
                }}
                
                InputProps={{
                    endAdornment : (
                        <InputAdornment position="end"><Person/></InputAdornment>
                    )
                }}

              />
              <TextField
                id="outlined-basic"
                label="Email"
                type="Email"
                variant="outlined"
                fullWidth
                sx={{
                  mb: "10px",
                }}
                InputProps={{
                    endAdornment : (
                        <InputAdornment position="end"><EmailIcon/></InputAdornment>
                    )
                }}
              />
              <TextField
                id="outlined-basic"
                label="Mobile No."
                type="number"
                variant="outlined"
                fullWidth
                sx={{
                  mb: "10px",
                }}
                InputProps={{
                    endAdornment : (
                        <InputAdornment position="end"><Mobile/></InputAdornment>
                    )
                }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                sx={{
                  mb: "10px",
                }}
                InputProps={{
                    endAdornment : (
                        <InputAdornment position="end"><PassIcon/></InputAdornment>
                    )
                }}
              />
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                sx={{
                  mb: "20px",
                }}
                InputProps={{
                    endAdornment : (
                        <InputAdornment position="end"><PassIcon/></InputAdornment>
                    )
                }}
              />
              <Button
                type="submit"
                fullWidth
                sx={{
                  bgcolor: "#FD7401",
                  color: "white",
                  borderRadius: "8px",
                  mb: "5px",
                  "&:hover": { bgcolor: "#FD7401" },
                }}
              >
                Create Account
              </Button>
              <br />
              <Divider sx={{ fontSize: "10px", fontWeight: "500" }}>OR</Divider>
              <Typography variant="p" fontSize={13}>
                Already have an Account?
              </Typography>{" "}
              <Typography variant="p" color={"#FD7401"} fontSize={14}>
                Login
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
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
            Register to DevLogix Account
          </Typography>
          <TextField
            id="outlined-basic"
            label="FullName"
            variant="outlined"
            fullWidth
            sx={{
              mt: "20px",
              mb: "10px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            type="Email"
            variant="outlined"
            fullWidth
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile No."
            type="number"
            variant="outlined"
            fullWidth
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            sx={{
              mb: "20px",
            }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              bgcolor: "#FD7401",
              color: "white",
              borderRadius: "8px",
              mb: "5px",
              "&:hover": { bgcolor: "#FD7401" },
            }}
          >
            Create Account
          </Button>
          <br />
          <Divider sx={{ fontSize: "10px", fontWeight: "500" }}>OR</Divider>
          <Typography variant="p" fontSize={13}>
            Already have an Account?
          </Typography>{" "}
          <Typography variant="p" color={"#FD7401"} fontSize={14}>
            Login
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default NewRegister;
