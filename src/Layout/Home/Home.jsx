import { Outlet } from "react-router-dom";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
// import About from "./Pages/About/About";
// import PageContainer from "./Pages/PageContainer";
// import Banner from "./Shared/Banner/Banner";
// import Navbar from "./Shared/Navbar/Navbar";


const Home = ({scrollAbout, scrollProject, scrollContact }) => {
    return (
        <div >
            {/* <Navbar></Navbar>
            <Banner></Banner> */}
            {/* <PageContainer></PageContainer> */}
            {/* <About></About> */}
            <div className="hidden xl:inline-block">
                <Outlet></Outlet>
            </div>
            <div className="xl:hidden">
                <About
                    scrollAbout={scrollAbout}
                ></About>
                <Projects
                    scrollProject={scrollProject}
                ></Projects>
                <Contact
                    scrollContact={scrollContact}
                ></Contact>
            </div>
        </div>
    );
};

export default Home;