import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, TextField } from "@mui/material";

const Login = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: 400,
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        className="Box" 
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          
        }}
      >
        <h2 style={{color:"#252EFF"}}>Login</h2>
        <TextField sx={{
            width:352,
            height:40,
            borderRadius:20,
            border: 2,
            borderColor:"#252EFF",
            
        }}/>

        <TextField sx={{
            width:352,
            height:40,
            borderRadius:20,
            border: 2,
            borderColor:"#252EFF",
                        
        }}/>
       
        <Button
          variant="contained"
          sx={{
            borderRadius: 20,
            width: 153,
            height: 38,
            backgroundColor:"#252EFF",
          }}
        >
          LOGIN
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
