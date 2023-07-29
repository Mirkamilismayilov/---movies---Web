import { Route, Routes } from 'react-router-dom';
import './index.css';
import Detail from './pages/detailPages/Detail';
import MainLayout from './pages/layout/MainLayout';
import Latest from './pages/Latest';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Favorit from './pages/Favorit';
import WatchList from './pages/WatchList';
import DetailLayout from './pages/layout/DetailLayout';
function App() {
  return (
    <div className=' h-screen flex '>
      <div className='w-screen '>

        {/* <Routes>
          <Route path='/' element={<Layout />} >
            <Route index={true} element={<MainComplete />} />
            <Route path='detail' element={<Detail />} />
          </Route>
          
        </Routes>  */}
        <Routes>

          <Route path='/' element={<MainLayout />} >

            <Route index={true} element={<Latest />} />
            <Route path='/nowplaying/:name' element={<NowPlaying />} />
            <Route path='/popular/:name' element={<Popular />} />
            <Route path='/toprated/:name' element={<TopRated />} />
            <Route path='/upcoming/:name' element={<Upcoming />} />

          </Route>

        </Routes>
        <Routes>
          <Route>
            <Route path='/' element={<DetailLayout />} />

            <Route path='/favorit' element={<Favorit />} />
            <Route path='/watchlist' element={<WatchList />} />
            <Route path='/detail/:id' element={<Detail />} />

          </Route>


        </Routes>





        {/* <Header />
        <MainUp />
        <Main />
        <Detail/> */}
      </div>
    </div>
  );
}

export default App;
