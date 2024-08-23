import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
import axios from "axios";
import {Container, Grid } from "@mui/material";

function App() {

  const [data, setData] = useState([]);

   const fetch = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    };
  

  useEffect(() => {
    fetch();
  }, []);

  return(
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {data.map((data) => (
                    <Grid item key={data.id} xs={12} sm={6} md={4} lg={3} xl={4}>
                        <ProductCard data={data} />
                    </Grid>
                ))}
            </Grid>
        </Container>

  )
   
};
export default App;
