import { Outlet } from "react-router-dom";
// import About from "./Pages/About/About";
// import PageContainer from "./Pages/PageContainer";
// import Banner from "./Shared/Banner/Banner";
// import Navbar from "./Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div >
            {/* <Navbar></Navbar>
            <Banner></Banner> */}
            {/* <PageContainer></PageContainer> */}
            {/* <About></About> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;