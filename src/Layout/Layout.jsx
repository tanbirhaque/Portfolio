import Home from "./Home/Home";
import Banner from "./Home/Shared/Banner/Banner";
import Navbar from "./Home/Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div>
            {/* <h1>this is home layout</h1> */}
            <div className="flex items-center" style={{ height: '100vh' }}>
                <div className="w-[1260px] mx-auto flex">
                    <Navbar></Navbar>
                    <Banner></Banner>
                    <Home></Home>
                </div>
            </div>
        </div>
    );
};

export default Layout;