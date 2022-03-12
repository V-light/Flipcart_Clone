import { makeStyles, Box, Typography, Button, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useSelector , useDispatch} from "react-redux";

//COMPONENT
import LoginDialog from "../login/LoginDialog";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyle = makeStyles({
  login: {
    color: "#2874f0",
    background: "#FFFFFF",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    height: 32,
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      fontSize: 13,
      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
    },
  },
  container: {
    display: "flex",
  },
});

const HeaderButtons = () => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const { showAccount, setShowAccount } = useContext(LoginContext);
  const { cartItems } = useSelector((state) => state.cart);

  const openLoginDialog = () => {
    setOpen(true);
  };
  const closeLoginDialog = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.wrapper}>
      <Link>
        {" "}
        {showAccount ? (
          <Profile account = {showAccount} setAccount = {setShowAccount}/>
          
        ) : (
          <Button
            variant="contained"
            onClick={() => openLoginDialog()}
            className={classes.login}
          >
            Login
          </Button>
        )}
      </Link>
      <Link>
        {" "}
        <Typography style={{ marginTop: 5 }}> More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}> Cart</Typography>
      </Link>
      <LoginDialog
        open={open}
        setOpen={setOpen}
        setShowAccount={setShowAccount}
      />
    </Box>
  );
};

export default HeaderButtons;
