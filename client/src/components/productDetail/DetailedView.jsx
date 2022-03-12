import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

//Components
import { getProductDetails } from "../../redux/actions/productAction";
import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";

const useStyle = makeStyles({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    margin: "0 80px",
    display: "flex",
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
});

const DetailedView = ({ match }) => {
  const { product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Box className={classes.container}>
          <Box style={{ minWidth: "40%" }}> <ActionItem product={product} /> </Box>
          <Box className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.greyTextColor, classes.smallText)}
              style={{ marginTop: 5 }}
            >
              8 Ratings & 1 Reviews
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailedView;
