import { Footer } from "../Footer";
import { Header } from "../Header";
import React from "react";

export const Layout =({children}) => {
 return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
 )
}
