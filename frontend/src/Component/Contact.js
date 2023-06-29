import React from "react";
import "./Book/Book.css";

const Contact = () => {
  return (
    <>
      {/* <Box display="flex" flexDirection='column' alignItem='center'> 
  <Typography variety="h2">This is A Crud application</Typography>
  <Typography variety="h2">By MERN Stack</Typography> */}
      {/* </Box> */}
      <h2 className="contact">
        This is a Crud application</h2>
         <h2 className="contact">Created by <span className="name">Shivam Gupta</span> 
      </h2>
         <h2> E-mail: 20shivamgupta02@gmail.com
      </h2>
    </>
  );
};

export default Contact;
