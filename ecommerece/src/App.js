import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
import axios from "axios";
import { Grid } from "@mui/material";

function App() {

  const [data, setData] = useState([]);

   const fetch = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      console.log(data.data);
      setData(data);
    };
  

  useEffect(() => {
    fetch();
  }, []);

  return(
    <>
    <Grid container spacing={2}>
      {
        data.map(()=> (<ProductCard/>
          
        ))
      }
    </Grid>
    </>
    );
};
export default App;
