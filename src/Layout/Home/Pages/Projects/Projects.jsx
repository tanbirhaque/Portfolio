import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


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

                    <div className="mx-[30px]">
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

                            <div className="hidden sm:block sm:basis-56">
                                <img
                                    alt="Guitar"
                                    src="https://i.ibb.co/MsVTjrs/Bery.png"
                                    className="aspect-square h-full w-full object-cover"
                                />
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
                                            <a href="#" className="text-[#61ce70]">
                                                Links
                                            </a>
                                            <a href="#" className="hover:underline hover:text-[#61ce70]">
                                                Live Preview
                                            </a>
                                            <a href="#" className="hover:underline hover:text-[#61ce70]">
                                                Frontend Code
                                            </a>
                                            <a href="#" className="hover:underline hover:text-[#61ce70]">
                                                Backend Code
                                            </a>
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