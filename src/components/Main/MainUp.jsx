import React from "react";
import { setSearch } from "../../feature/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/es/input/Search";

const MainUp = () => {
  const seletor = useSelector(state=>state.dataMovie)
 const dispatch = useDispatch()

  // const change =(value)=>{
    
  //   fetch(`https:api.themoviedb.org/3/search/movie?api_key=07989e510be31f37e529531744bfc3ec&query=${value}`)
  //   .then(resp=>resp.json())
  //   .then(data=>dispatch(setSearch(data)))
  // }


  const change = async (value) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=07989e510be31f37e529531744bfc3ec&query=${value}`
    const resp = await fetch(url)
    const data = await resp.json()
    dispatch(setSearch(data))
   
  }




  return (
    <div className=" respons  text-start px-40 gap-6 flex flex-col mt-10 ">
      <h1 className="text-white text-6xl ">MovieDB</h1>
      <span className="secList  text-[#8e95a9] ">
        List of movies and TV Shows, I, Pramod Poudel have watched till date.{" "}
        <br />
        Explore what I have watched and also feel free to make a suggestion. 😉
      </span>
<div className="">
      <Search enterButton placeholder=" search movie" onSearch={change}  className='search'  />
     </div>
      {/* <input onSubmit={change} className="secInput  " placeholder="search movie" type="text" /> */}


      <p className="text-[#8e95a9] text-xl ">ALL(120)</p>
    </div>
  );
};

export default MainUp;
