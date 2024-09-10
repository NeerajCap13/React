import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";

const Landing = () => {
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
              width: "30vw",
              bgcolor: "coral",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px:"10px",
              py:"10px"
            }}
          >
            <Box
              sx={{
                maxWidth: "390px",
                margin: "auto 0",
                paddingBottom: "20px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <Typography variant="h5">DevLogix</Typography>
              <Typography variant="p">
                Login into your account
              </Typography>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
                sx={{
                  mt:"20px",
                  mb:"10px"
                }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box component={"img"}  sx={{ height: "100%", width: "70vw",  }}>
          </Box>
        </>
      ) : (
        <Box sx={{ height: "100%", width: "100vw", bgcolor: "coral" }}>
          <Box
              sx={{
                maxWidth: "390px",
                margin: "auto 0",
                paddingBottom: "20px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <Typography variant="h5">DevLogix</Typography>
              <Typography variant="p" my={4}>
                Login into your account
              </Typography>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Box>
        </Box>
      )}
    </Box>
  );
};

export default Landing;
