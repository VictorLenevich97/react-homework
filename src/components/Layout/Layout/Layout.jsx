import { Footer } from "../Footer";
import { Header } from "../Header";
import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkMode"
import '../../../index.css'


export const Layout = ({ children }) => {
   const { darkMode } = useContext(DarkModeContext)
   return (
      <>
         <Header />
         <div className={darkMode ? 'container container-dark' : 'container container-light'}>
            <main>{children}</main>
         </div>
         <Footer />
      </>
   )
}
