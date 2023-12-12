import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import './Project.css'


const Projects = () => {
    return (
        <div>
            <div className="h-[673px] py-[10px]">
                <div className="bg-[#31313a] w-[685px] h-full pt-6 overflow-hidden overflow-y-scroll pb-[40px]">
                    <div className="contact_section">
                        <div className="mx-[30px] mb-5">
                            <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#61ce70]">M</span>y Projects</h3>
                        </div>
                        <div className="divider m-0 h-0"></div>
                    </div>

                    <div className="mx-[30px] grid  mt-5">
                        <h3 className="text-center text-white uppercase font-bold text-[26px] mb-[10px]">Project - 1</h3>
                        {/* Bery */}
                        <article className="flex bg-[#1f1f1f] transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                    dateTime="2022-10-10"
                                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-300"
                                >
                                    <span>Nov 23</span>
                                    <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                    <span>2023</span>
                                    <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                    <span>Nov 29</span>
                                </time>
                            </div>

                            <div className="project_img hidden sm:block sm:basis-56 relative">
                                <img
                                    alt="Guitar"
                                    src="https://i.ibb.co/MsVTjrs/Bery.png"
                                    className="aspect-square h-full w-full object-cover"
                                />
                                <div className="overlay hidden bg-gradient-to-br from-green-500/60 to-green-100/50 w-full h-full absolute top-0 left-0">
                                    <div className=" text-[36px] text-white flex justify-center items-center h-full">
                                        <FaLink className="shadow-lg"></FaLink>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    <a href="#">
                                        <h3 className="font-bold uppercase text-white text-[20px]">
                                            <span className="text-[#61ce70]">B</span>ery <span className="text-[12px] text-gray-400">- Real Estate Project</span>
                                        </h3>
                                    </a>
                                    <p>Bery is a real-state website with 3 different dashboards, for admin, users and agents.</p>
                                    <div className="grid grid-cols-2 mt-[8px]">
                                        <div className="grid border-gray-600 border-r-[1px]">
                                            <p className="text-[#61ce70]">
                                                Links
                                            </p>
                                            <Link to={'https://assignment-12-bery.web.app/'} target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Live Preview
                                            </Link>
                                            <Link to="https://github.com/Anirat04/Bery-Client" target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Frontend Code
                                            </Link>
                                            <Link to="https://github.com/Anirat04/Bery-server" target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Backend Code
                                            </Link>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[#61ce70]">Technologies</p>
                                            <div className="grid grid-cols-3 justify-items-end gap-2 mt-[5px] text-[20px]">
                                                <FaReact />
                                                <SiMongodb />
                                                <TbBrandNodejs />
                                                <SiExpress />
                                                <FaHtml5 />
                                                <FaCss3Alt />
                                                <SiTailwindcss />
                                                <IoLogoFirebase />
                                                <FaGitAlt />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:flex sm:items-end sm:justify-end">
                                    <a
                                        href="#"
                                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </article>

                        <h3 className="text-center text-white uppercase font-bold text-[26px] mt-9 mb-[10px]">Project - 2</h3>
                        {/* Share Food */}
                        <article className="flex bg-[#1f1f1f] transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                    dateTime="2022-10-10"
                                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-300"
                                >
                                    <span>Nov 4</span>
                                    <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                    <span>2023</span>
                                    <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                    <span>Nov 9</span>
                                </time>
                            </div>

                            <div className="project_img hidden sm:block sm:basis-56 relative">
                                <img
                                    alt="Guitar"
                                    src="https://i.ibb.co/RQZ6XGv/Share-Food.png"
                                    className="aspect-square h-full w-full object-cover"
                                />
                                <div className="overlay hidden bg-gradient-to-br from-green-500/60 to-green-100/50 w-full h-full absolute top-0 left-0">
                                    <div className=" text-[36px] text-white flex justify-center items-center h-full">
                                        <FaLink className="shadow-lg"></FaLink>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    <a href="#">
                                        <h3 className="font-bold uppercase text-white text-[20px]">
                                            <span className="text-[#61ce70]">S</span>hare food <span className="text-[12px] text-gray-400">- Food Donation Project</span>
                                        </h3>
                                    </a>
                                    <p>Share Food is a food sharing website where people can donate their wastage foods for the people who need this</p>
                                    <div className="grid grid-cols-2 mt-[8px]">
                                        <div className="grid border-gray-600 border-r-[1px]">
                                            <p className="text-[#61ce70]">
                                                Links
                                            </p>
                                            <Link to="https://assignment-11-share-food.web.app/" target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Live Preview
                                            </Link>
                                            <Link to="https://github.com/Anirat04/Share-Food_Client" target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Frontend Code
                                            </Link>
                                            <Link to="https://github.com/Anirat04/Share-Food_Server" target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Backend Code
                                            </Link>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[#61ce70]">Technologies</p>
                                            <div className="grid grid-cols-3 justify-items-end gap-2 mt-[5px] text-[20px]">
                                                <FaReact />
                                                <SiMongodb />
                                                <TbBrandNodejs />
                                                <SiExpress />
                                                <FaHtml5 />
                                                <FaCss3Alt />
                                                <SiTailwindcss />
                                                <IoLogoFirebase />
                                                <FaGitAlt />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:flex sm:items-end sm:justify-end">
                                    <a
                                        href="#"
                                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </article>

                        <h3 className="text-center text-white uppercase font-bold text-[26px] mt-9 mb-[10px]">Project - 3</h3>
                        {/* eTrade */}
                        <article className="flex bg-[#1f1f1f] transition hover:shadow-xl">
                            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                <time
                                    dateTime="2022-10-10"
                                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-300"
                                >
                                    <span>Oct 22</span>
                                    <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                    <span>2023</span>
                                    <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                    <span>Oct 26</span>
                                </time>
                            </div>

                            <div className="project_img hidden sm:block sm:basis-56 relative">
                                <img
                                    alt="Guitar"
                                    src="https://i.ibb.co/3p7x59X/eTrade.png"
                                    className="aspect-square h-full w-full object-cover"
                                />
                                <div className="overlay hidden bg-gradient-to-br from-green-500/60 to-green-100/50 w-full h-full absolute top-0 left-0">
                                    <div className=" text-[36px] text-white flex justify-center items-center h-full">
                                        <FaLink className="shadow-lg"></FaLink>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                    <a href="#">
                                        <h3 className="font-bold uppercase text-white text-[20px]">
                                            <span className="text-[#61ce70]">e</span>Trade<span className="text-[12px] text-gray-400">- Clothing Ecommerce</span>
                                        </h3>
                                    </a>
                                    <p>eTrade is a platform where you can by different brand's products.</p>
                                    <div className="grid grid-cols-2 mt-[8px]">
                                        <div className="grid border-gray-600 border-r-[1px]">
                                            <p className="text-[#61ce70]">
                                                Links
                                            </p>
                                            <Link to="https://assignment-10-sell-shop.web.app/" target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Live Preview
                                            </Link>
                                            <Link to="https://github.com/Anirat04/eTrade" target="_blank" className="hover:underline hover:text-[#61ce70]">
                                                Frontend Code
                                            </Link>
                                            <Link to="https://github.com/Anirat04/eTrade_Server" className="hover:underline hover:text-[#61ce70]">
                                                Backend Code
                                            </Link>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[#61ce70]">Technologies</p>
                                            <div className="grid grid-cols-3 justify-items-end gap-2 mt-[5px] text-[20px]">
                                                <FaReact />
                                                <SiMongodb />
                                                <TbBrandNodejs />
                                                <SiExpress />
                                                <FaHtml5 />
                                                <FaCss3Alt />
                                                <SiTailwindcss />
                                                <IoLogoFirebase />
                                                <FaGitAlt />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:flex sm:items-end sm:justify-end">
                                    <a
                                        href="#"
                                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* <div className="grid grid-cols-2">
                        <div>
                            <div>
                                <div>
                                    <img src="https://i.ibb.co/d5LKHqT/Screenshot-5-removebg-preview.png" alt="" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-white text-[18px]">Bery</h3>
                                    <ul className="">
                                        <li>
                                            <Link>Live Link</Link>
                                        </li>
                                        <li>
                                            <Link>Frontend Code</Link>
                                        </li>
                                        <li>
                                            <Link>Backend Code</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;