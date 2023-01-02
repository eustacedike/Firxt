
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";



import Navigation from "./Header/Navigation";



function Layout() {
  return (
    <div className="Layout">
      <Navigation/>
      <Outlet/>
      

      {/* <Footer/> */}
    </div>
  );
}

export default Layout;
