import Home from "./Home/Home";


const Layout = () => {
    return (
        <div>
            {/* <h1>this is home layout</h1> */}
            <div className="flex items-center" style={{ height: '100vh' }}>
                <Home></Home>
            </div>
        </div>
    );
};

export default Layout;