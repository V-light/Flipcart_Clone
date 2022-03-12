import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { navData } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  component: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflowX: "overlay",
    [theme.breakpoints.down('md')]:{
      margin: 0
    }
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: "70px",
  },
  text: {
    fontSize: 13,
    fontFamily: 6000,
    fontFamily: "inherit",
  },
}));

const Navbar = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {navData.map((data) => (
        <Box className={classes.container}>
          <img src={data.url} className={classes.image} />
          <Typography className={classes.text}> {data.text} </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
