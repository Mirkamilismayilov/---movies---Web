import React from "react";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiFillHeart, AiOutlineStar } from "react-icons/ai";
import { setCountFavDec, setFullFavorit } from "../feature/counterSlice";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const Favorit = () => {
  const selector = useSelector((state) => state.dataMovie);
  const dispatch = useDispatch()
  console.log(selector.favorit);

  const fullHeart =(id)=>{
   dispatch(setFullFavorit(id))
   dispatch(setCountFavDec())
  }

  return (
    <>
<Header />
    <div className="flex justify-between items-center flex-wrap px-40 mt-6 gap-2">
      

      {
        selector.favorit.length > 0 ? 
        selector.favorit?.map((item,index)=>{
          return (
            <div className="flex  justify-between items-center  ">

            
            <div key={index} className="border relative ">
                <div className="flex gap-32 absolute left-5 top-4 text-2xl text-orange-400 z-40">
                  <div className="flex items-center gap-1 bg-gray-800/80 rounded-md px-1">
                    <AiOutlineStar /> {item.vote_average}
                  </div>
                  <div className="flex items-center gap-1 bg-gray-800/80 rounded-md p-1 right-0">
                    {/* <Heart className="heartDiv" onClick={()=>cardId(item.id)}/> */}

                    <button onClick={()=>fullHeart(item.id)}>
                     
      
                    {/* <FaRegHeart /> */}
                         <AiFillHeart /> 
                        
                    </button>
                  </div>
                </div>

              
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

                <div className="movieName"> {item.original_title} </div>
              </div>
</div>
          )
        })
        : <div className='favorite mx-auto h-screen text-4xl'>
        <p className='tracking-widest'>Your favoritlist is empty</p>
      </div>
      }
    </div>
    </>
  );
};

export default Favorit;
