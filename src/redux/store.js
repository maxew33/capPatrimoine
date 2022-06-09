import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './changePage'

export const store =  configureStore({
    reducer: {
        myPage: pageReducer
    }
})