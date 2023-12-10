import Banner from "./Shared/Banner/Banner";
import Navbar from "./Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="w-[1260px] bg-white mx-auto flex">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;