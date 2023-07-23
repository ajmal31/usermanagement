import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slices";

 const ReduxStore=configureStore({
    reducer:{
        userMangement:Slices,
        
    }
})

export default ReduxStore