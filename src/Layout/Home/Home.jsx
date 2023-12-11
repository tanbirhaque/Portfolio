import PageContainer from "./Pages/PageContainer";
import Banner from "./Shared/Banner/Banner";
import Navbar from "./Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="w-[1260px] mx-auto flex">
            <Navbar></Navbar>
            <Banner></Banner>
            <PageContainer></PageContainer>
        </div>
    );
};

export default Home;