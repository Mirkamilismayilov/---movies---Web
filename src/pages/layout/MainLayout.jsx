import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import MainUp from '../../components/Main/MainUp'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <MainUp/>
      <Outlet/>
    </>
  )
}

export default MainLayout
