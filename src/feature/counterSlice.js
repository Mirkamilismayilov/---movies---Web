import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
    search: "",
    favorit: localStorage.getItem("favorit") ? 
    JSON.parse(localStorage.getItem("favorit")) : 
    [],
    tag: localStorage.getItem("tag") ? 
    JSON.parse(localStorage.getItem("tag")) :  [],
    countFav: localStorage.getItem("countFav") ? 
    JSON.parse(localStorage.getItem("countFav")) :  0,
    countTag:localStorage.getItem("countTag") ? 
    JSON.parse(localStorage.getItem("countTag")) :  0,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setFavorit: (state, action) => {
      state.favorit = [...state.favorit, action.payload];
      localStorage.setItem("favorit",JSON.stringify(state.favorit))

    },
    setFullFavorit: (state, action) => {
      state.favorit = state.favorit.filter(filt => filt.id !== action.payload);
      localStorage.setItem("favorit",JSON.stringify(state.favorit))
    },
    setTag: (state, action) => {
      state.tag = [...state.tag, action.payload];
      localStorage.setItem("tag",JSON.stringify(state.tag))
    },
    setFullTag: (state, action) => {
      state.tag = state.tag.filter(filt => filt.id !== action.payload);
      localStorage.setItem("tag",JSON.stringify(state.tag))
    },
    setCountFav:(state)=>{
      state.countFav += 1;
      localStorage.setItem("countFav",JSON.stringify(state.countFav))
    },
    setCountFavDec:(state)=>{
      state.countFav -= 1;
      localStorage.setItem("countFav",JSON.stringify(state.countFav))
    },
    setCountTag:(state)=>{
      state.countTag += 1;
      localStorage.setItem("countTag",JSON.stringify(state.countTag))
    },
    setCountTagDec:(state)=>{
      state.countTag -= 1;
      localStorage.setItem("countTag",JSON.stringify(state.countTag))
    }
  }
})
export const { setValue, setSearch, setFavorit, setFullFavorit, setTag, setFullTag,setCountFav,setCountFavDec,setCountTag,setCountTagDec } = CounterSlice.actions

export default CounterSlice.reducer