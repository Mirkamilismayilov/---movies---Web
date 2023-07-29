/* eslint-disable array-callback-return */
import React from "react";
import { AiFillHeart, AiFillTag, AiOutlineHeart, AiOutlineStar, AiOutlineTag } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  setCountFav,
  setCountFavDec,
  setCountTag,
  setCountTagDec,
  setFavorit,
  setFullFavorit,
  setFullTag,
  setTag,
} from "../../feature/counterSlice";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const MainCard = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.dataMovie);
  // console.log(selector.value);
  // console.log(selector.search);

  console.log(selector.favorit);
  const boxId = (id) => {
    let boxFind = selector.favorit.find((item) => item.id === id);
    if (boxFind) {
      console.log("box elave olundu");
      dispatch(setFullFavorit(id))
      dispatch(setCountFavDec())
    } else {
      selector.value.results?.map((item) => {
        if (item.id === id) {
          console.log(item);
          dispatch(setFavorit(item));
          dispatch(setCountFav());
        }
      });
      selector.search.results?.map((item)=>{
        if(item.id === id ){
          dispatch(setFavorit(item));
          dispatch(setCountFav());
        }
      })
    }
  };
  console.log(selector.tag);
  const tagId = (id) => {
    let tagFind = selector.tag.find((item) => item.id === id);
    if (tagFind) {
      dispatch(setFullTag(id))
dispatch(setCountTagDec())
    } else {
      selector.value.results?.map((item) => {
        if (item.id === id) {
          dispatch(setTag(item));
          dispatch(setCountTag());

        }
      });
      selector.search.results?.map((item)=>{
        if(item.id === id ){
          dispatch(setTag(item));
          dispatch(setCountTag());
        }
      })
    }
  };

  return (
    <div className="section2 px-40 gap-2">
      {selector.search.results
        ? selector.search.results?.map((item, index) => {
            return (
              <div className="">
              {
                item.poster_path !== null ?
                <div key={index} className="border gap-10">
                <div className="flex  gap-28 absolute left-5 top-4 text-2xl text-orange-400 z-40">
                  <div className="">
                    <div className=" flex items-center gap-1 bg-gray-800/80 rounded-md px-1 ">
                      <AiOutlineStar /> {item.vote_average}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-800/80 rounded-md p-1 right-0">
                    <button onClick={() => boxId(item.id)}>
                    {
                         selector.favorit.find((x) => x.id === item.id) ? 
                          <AiFillHeart /> : <AiOutlineHeart />
                      }  
                        
                    </button>
                    {/* <FaRegHeart className="" /> */}
                  </div>
                </div>

                <NavLink to={`/detail/${item.id}`}>
                  <img
                    className="movImage flex"
                    src={API_IMG + item.poster_path}
                    alt=""
                  />
                </NavLink>
                <div className="movieName"> {item.original_title} </div>
                <div className="movieName flex justify-between w-44 items-center">
                  {" "}
                  {item.original_title}
                  <button onClick={() => tagId(item.id)}>
                  {
                      selector.tag.find((y) => y.id === item.id) ? 
                      <AiFillTag className="text-2xl  text-orange-400"/> : <AiOutlineTag className="text-2xl  text-orange-400"/>

                    }
                  </button>
                </div>
              </div> : ""
              }
             </div>
            );
          })


        : selector.value.results?.map((item, index) => {
            return (
              <div key={index} className="border relative">
                <div className=" gap1  flex gap-28 absolute left-5 top-4 text-2xl text-orange-400 z-40">
                  <div className="flex items-center gap-1 bg-gray-800/80 rounded-md px-1">
                    <AiOutlineStar /> {item.vote_average}
                  </div>
                  <div className="flex items-center gap-1 bg-gray-800/80 rounded-md p-1 right-0">
                    {/* <Heart className="heartDiv" onClick={()=>cardId(item.id)}/> */}

                    <button onClick={() => boxId(item.id)}>
                      {
                         selector.favorit.find((x) => x.id === item.id) ? 
                          <AiFillHeart /> : <AiOutlineHeart />
                      }  
                        
                        
                      
                    </button>
                  </div>
                </div>

                {/* <div className="">
            <div className="star ">
              <div className="starImg  ">
                <AiOutlineStar /> {item.vote_average}
                
              </div>
              
            </div>
            <div className="star right-0 -top-0">
            <div >
          <FaRegHeart className="text-[#FFAD49] text-2xl absolute z-10 top-5 right-6  " /> </div></div>
  </div> */}
                <div>
                  {" "}
                  <NavLink to={`/detail/${item.id}`}>
                    <img
                      className="movImage flex"
                      src={API_IMG + item.poster_path}
                      alt=""
                    />
                  </NavLink>{" "}
                </div>

                <div className="movieName flex justify-between w-44 items-center">
                  {" "}
                  {item.original_title}
                  <button onClick={() => tagId(item.id)}>
                 
                    {
                      selector.tag.find((y) => y.id === item.id) ? 
                      <AiFillTag className="text-2xl  text-orange-400"/> : <AiOutlineTag className="text-2xl  text-orange-400"/>

                    }
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default MainCard;
