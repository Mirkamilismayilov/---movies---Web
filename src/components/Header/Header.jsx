import React from "react";
import icon from "../../assets/icon.svg";
import { AiOutlineHeart, AiOutlineTag } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-6 h-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>;

const Header = () => {
  const selector = useSelector((state) => state.dataMovie);

  return (
    <div className="bg-[#121829] flex px-40 justify-between items-center  h-20 header">
      <div className="">
        <NavLink to="/">
          <img  src={icon} alt="x" className="w-12 logo" />
        </NavLink>
      </div>
      <div className=" cursor-pointer hidden  h-16 sm:flex  Pages  gap-5 text-slate-50 text-xl items-center">
        <ul className="flex gap-5">
          <li >
            <NavLink activeclassname = "active" to="/">Latest</NavLink>
          </li>
          <li>
            <NavLink to="/nowplaying/now_playing">NowPlaying</NavLink>
          </li>
          <li>
            <NavLink to="/popular/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/toprated/top_rated">TopRated</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming/upcoming">UpComing</NavLink>
          </li>
          <li className="relative ">
            <Link to="/favorit">
              <AiOutlineHeart className="text-[#7687DA] text-3xl iconshover" />
              {selector.favorit.length > 0 ? (
                <div className="favouriteCount z-50">{selector.countFav}</div>
              ) : (
                <div></div>
              )}
            </Link>
          </li>
          <li className="relative ">
            <Link to="/watchlist">
              <AiOutlineTag className="text-[#7687DA]  text-3xl  iconshover" />
              {selector.tag.length > 0 ? (
                <div className="TagCount z-50">{selector.countTag} </div>
              ) : (
                <div></div>
              )}
            </Link>
          </li>
        </ul>
      </div>

      {/* <Latest  />
        <NowPlaying />
        <Popular />
        <TopRated />
        <Upcoming /> */}

      <div class=" flex sm:hidden">
        <div class="space-y-2">
          <span class="block w-8 h-0.5 bg-slate-300 animate-pulse"></span>
          <span class="block w-8 h-0.5 bg-slate-300 animate-pulse"></span>
          <span class="block w-8 h-0.5 bg-slate-300 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
