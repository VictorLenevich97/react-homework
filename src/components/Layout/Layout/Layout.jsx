import { Footer } from "../Footer";
import { Header } from "../Header";
import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkMode"
import '../../../index.css'
import { Outlet } from "react-router-dom";

export const Layout = () => {
   const { darkMode } = useContext(DarkModeContext)
   return (
      <>
         <Header />
         <div className={darkMode ? 'container container-dark' : 'container container-light'}>
            <main> <Outlet /></main>
         </div>
         <Footer />
      </>
   )
}