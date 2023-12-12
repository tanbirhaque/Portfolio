import Home from "./Home/Home";
import Banner from "./Home/Shared/Banner/Banner";
import Navbar from "./Home/Shared/Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor"


const Layout = () => {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                showSystemCursor={true}
                innerStyle={{
                    backgroundColor: '#61ce70'
                }}
                outerStyle={{
                    border: '1px solid #61ce70'
                }}
            />
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