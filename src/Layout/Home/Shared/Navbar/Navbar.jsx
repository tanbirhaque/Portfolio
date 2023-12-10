import { FaRegUser } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { MdContactMail } from "react-icons/md";
const Navbar = () => {
    return (
        <div>
            <div className="navContainer mt-[20px]">
                <ul className="bg-[#31313a] inline-block">
                    <li className="flex flex-col items-center p-4 border-b-[1px]">
                        <FaRegUser />
                        About
                    </li>
                    <li className="flex flex-col items-center p-4 border-b-[1px]">
                        <RiProfileLine />
                        Resume
                    </li>
                    <li className="flex flex-col items-center p-4 border-b-[1px]">
                        <GrWorkshop />
                        Projects
                    </li>
                    <li className="flex flex-col items-center p-4 border-b-[1px]">
                        <TfiWrite />
                        Blogs
                    </li>
                    <li className="flex flex-col items-center p-4 border-b-[1px]">
                        <MdContactMail />
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;