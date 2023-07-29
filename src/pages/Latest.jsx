import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../feature/counterSlice";
import MainCard from "../components/Main/MainCard";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const Latest = () => {
  const selector = useSelector((state) => state.dataMovie);
  const dispatch = useDispatch();
  console.log(selector.value);
  useEffect(() => {
    const Key = "07989e510be31f37e529531744bfc3ec";

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`
    )
      .then((resp) => resp.json())
      .then((data) =>dispatch(setValue(data)));
  },[]);

  return <div className="">
    <MainCard/>
  </div>;

};

export default Latest;
