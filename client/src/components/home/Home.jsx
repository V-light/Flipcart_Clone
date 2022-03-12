import {React , useEffect} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, makeStyles } from "@material-ui/core";
import {useSelector , useDispatch} from 'react-redux';
//Components
import Slide from "./Slide";
import Midsections from "./Midsections";
// import { products } from "../../constants/data";
import {getProducts as listProducts} from "../../redux/actions/productAction"


const useStyle = makeStyles(theme => ({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  leftwrapper: {
    width: '83%',
    [theme.breakpoints.down('md')] :{
      width: '100%'
    } 
  },
  rightwrapper: {
    background: "#FFFFFF",
    margin: '12px 0 0 10px',
    padding: 5,
    width: '17%',
    [theme.breakpoints.down('md')] :{
      display: 'none'
    } 
  }
}));
const Home = () => {
  const classes = useStyle();

  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const {products} = useSelector(state=> state.getProducts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(listProducts());
  },[])
  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style = {{display: "flex"}} >
          <Box  className = {classes.leftwrapper}>
            <Slide timer = {true} title = "Deal of the day"  products =  { products }/>
          </Box>
          <Box className = {classes.rightwrapper}>
            <img src={adURL} style = {{width:215}}/>
          </Box>
        </Box>
        <Midsections />
        <Slide timer = {false} title = "Discounts for you" products =  { products }/>
        <Slide timer = {false} title = "Suggested for you" products =  { products }/>
        <Slide timer = {false} title = "Top Selections" products =  { products }/>
        <Slide timer = {false} title = "Bestsellers" products =  { products }/>
      </Box>
    </div>
  );
};

export default Home;
