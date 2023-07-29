/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import img from "../../assets/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg";
import img1 from "../../assets/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png";
import star from "./../../assets/star.svg";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

const Detail = () => {
  const {id} = useParams()
  const API_IMG = "https://image.tmdb.org/t/p/w500";
 const [dataDetail,setDataDetail] = useState("")

  useEffect(()=>{
    
  
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=07989e510be31f37e529531744bfc3ec&language=en-US`)
  .then(resp=>resp.json())
  .then(data=>setDataDetail(data))
  
  
  },[])
 console.log(dataDetail);

 let backdrop = `https://image.tmdb.org/t/p/original/${dataDetail.backdrop_path}`;


  return (

    <>

    <Header/>





      <div className="  w-full flex-col">
        <div className="w-full justify-center  flex ">
          <img className="w-10/12  h-96 mt-6 rounded-2xl  " src={API_IMG + backdrop } alt="" />
        </div>
        <div className=" detail flex items-center  sticky w-96 p-8 bg-white rounded-3xl -mt-14 ml-44  ">
          <a className="a" href="#">
            {dataDetail?.tagline}
          
          </a>
          <p className="about">{dataDetail.title
}</p>
        </div>

        <div className="flex justify-center gap-8 flex-wrap h-screen mt-16">
<div className="">
  <img className="w-96 BlackW object-cover" src={API_IMG + dataDetail.poster_path} alt="" />
</div>
<div className="detailComplete  flex gap-4 flex-col ">
 <div className="w-96">
  <h1 className="text-white text-xl">Part of the journey is the end.</h1>
  <p className="text-xl actor  ">
 {dataDetail.overview
}

  </p>
  
 </div>
 <div className="star2">
 <div className="starImg flex ">
            <img src={star} alt="" /> {dataDetail.vote_average
}
          </div>
 </div>
 <div>
  <p className="actor">Type</p>
  <p className="text-xl">Movie</p>
 </div>
 <div>
 <p className="actor">Relase Date:</p>
  <p className="text-xl">{dataDetail.release_date
}</p>
 </div>
 <div>
 <p className="actor">Run time</p>
  <p className="text-xl">{dataDetail.runtime}</p>
 </div>
 <div>
 <p className="actor">Genres</p>
  <p className="text-xl">Adventure, Sciense Fiction, Action</p>
 </div>
 {/* <div>
 <p className="actor">Type</p>
  <p className="text-xl">Movie</p>
 </div> */}
</div>

        </div>
      </div>
    </>
  );
};

export default Detail;
