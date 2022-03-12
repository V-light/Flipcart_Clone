import * as actionTypes from '../constants/cartConstant';
import axios from 'axios';


export const addToCart =(id)=> async (dispatch)=>{
    try{
        
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
    }catch(err){
        console.log("error while calling data");
    }
}

export const removeFromCart = (id) => (dispatch) => {
    console.log(id);
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    
};