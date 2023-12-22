import { Outlet } from "react-router-dom";
import { StickyNavbar } from "../components/Navbar/SharedNavbar/StickyNavbar";
import { Footer } from "../components/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;