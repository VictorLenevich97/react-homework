import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

// export const Layout = ({children}) => {
//     return (
//         <div>
//             <Header/>
//             {children}
//             <Footer/>
//         </div>

//     )
// }

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
