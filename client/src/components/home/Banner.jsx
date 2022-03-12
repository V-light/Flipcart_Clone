import React from "react";
import { bannerData } from "../../constants/data";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";

const useStyle = makeStyles(theme => ({
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down("sm")]:{
      objectFit: 'cover',
      height: 100,
    }
  },
  container: {
      marginTop: 10
  },
}));
const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      className={classes.container}
      StylesProvider
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          margin: 0,
          width: 50,
        },
      }}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} />
      ))}
    </Carousel>
  );
};

export default Banner;
