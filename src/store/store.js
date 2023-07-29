import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counterSlice";


export default  configureStore({
    reducer:{
        dataMovie:counterSlice
    }
})