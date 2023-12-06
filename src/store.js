import {configureStore, createSlice} from "@reduxjs/toolkit";

let item = createSlice({
  name:'item',
  initialState: 'cafe'  
})

export default configureStore({
  reducer :{
    item : item.reducer
  }
})