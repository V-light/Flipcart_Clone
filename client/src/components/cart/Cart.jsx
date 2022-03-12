import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, makeStyles, Typography } from "@material-ui/core";

//component
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import TotalView from './TotalView';


const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    padding: "30px 135px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    // width: '67%',
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
}));

const Cart = () => {
  const classes = useStyle();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(cartItems);
  }, []);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.length ? (
        <Box className={classes.component}>
          <Box className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                {" "}
                My Cart ({cartItems.length}){" "}
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={classes.bottom}>
              <Button variant="contained" className={classes.placeOrder}>
                Place Order
              </Button>
            </Box>
          </Box>
          <Box className={classes.rightComponent}>
              <TotalView  cartItems = {cartItems} />
           </Box>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
