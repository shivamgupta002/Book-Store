import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Book/Book.css";


const Home = () => {
  return (
    <>
      <Box className="home">
        <Button LinkComponent={Link} to="/books">
          <Typography >View All Product</Typography>
        </Button>
      </Box>
      {/* <Button className="home">View All Product</Button> */}
    </>
  );
};

export default Home;
