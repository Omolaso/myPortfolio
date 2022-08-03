import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from '../redux-slice/HamburgerSlice';

const store = configureStore({
    reducer:{
        hamburger: hamburgerReducer
    },
})

// console.log(store);



export default store