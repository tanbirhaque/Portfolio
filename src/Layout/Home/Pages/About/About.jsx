import htmlPNG from "../../../../assets/Images/HTML5_Badge.svg.png"
import cssPNG from "../../../../assets/Images/css-icon.png"
import jsPNG from "../../../../assets/Images/javascript_icon.png"
import reactPNG from "../../../../assets/Images/react-icon-29.jpg"
import nodePNG from "../../../../assets/Images/node-js-icon-8.jpg"
import expressPNG from "../../../../assets/Images/express_logo.png"
import mongoDB from "../../../../assets/Images/mongoDB.png"
import tailwindPNG from "../../../../assets/Images/Tailwind-CSS1-900x0.png"
import bootstrapPNG from "../../../../assets/Images/bootstrap.png"
import SkillsComponent from "../../Components/SkillsComponent/SkillsComponent";
import { IoIosSchool } from "react-icons/io";
import { GiBiceps } from "react-icons/gi";
import { HiMiniLanguage } from "react-icons/hi2";

const About = () => {
    return (
        <div>
            <div className="md:h-[673px] py-[10px]">
                <div className="bg-[#31313a] w-full mx-auto md:w-[685px] h-full pt-6 md:overflow-hidden md:overflow-y-scroll pb-[40px]">
                    {/* About me section starts */}
                    <div className="about_section">
                        <div className="mx-[30px] mb-5">
                            <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#61ce70]">A</span>bout Me</h3>
                        </div>
                        <div className="divider m-0 h-0"></div>
                        <div className="grid md:grid-cols-2">
                            <div className="p-[30px] border-[#3d3d47] border-r-[1px]">
                                <p>
                                    <span className="font-bold">Hello! I’m Tanbir Haque Anil.</span>
                                    <br />
                                    <span className="font-medium">
                                        Skilled web developer from Dhaka, Bangladesh, proficient in HTML, CSS, JavaScript, Tailwind CSS, and React JS. Completed 12 practical personal projects and proficient in tools like DaisyUI, MambaUI, Material UI, and Flowbite.
                                    </span>
                                </p>
                            </div>
                            <div className="p-[30px]">
                                <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between">
                                    <span className="bg-[#61ce70] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Age:</span>
                                    <span>17</span>
                                </div>
                                <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                                    <span className="bg-[#61ce70] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Nationality:</span>
                                    <span>Bangladeshi</span>
                                </div>
                                <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                                    <span className="bg-[#61ce70] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Location:</span>
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                        <div className="divider m-0 h-0"></div>
                    </div>
                    {/* About me section ends */}

                    {/* Education and language section starts */}
                    <div className="edu_lang-section pb-[25px]">
                        <div className="mx-[30px] grid md:grid-cols-2">
                            <div className="education border-[#3d3d47] md:border-r-[1px] pr-5 pt-5">
                                <h3 className="font-bold text-[20px] text-white popFont flex items-center gap-2 mb-3">
                                    <IoIosSchool className="text-[35px] text-[#78cc6d]" />
                                    Education
                                </h3>
                                <div className="border-y-[1px] border-[#3d3d47] py-[20px]">
                                    <div className="border border-[#78cc6d] inline-block px-[10px]">
                                        <h3 className="text-[13px] text-[#78cc6d]">2023 - Present</h3>
                                    </div>
                                    <p className="text-white font-semibold mt-[10px]">HSC</p>
                                    <p className="text-[12px]">Science</p>
                                    <p>Dania University College</p>
                                    <p>Location: Dhaka, Bangladesh</p>
                                </div>
                                <div className="border-y-[1px] border-[#3d3d47] py-[20px]">
                                    <div className="border border-[#78cc6d] inline-block px-[10px]">
                                        <h3 className="text-[13px] text-[#78cc6d]">2021 - 2022</h3>
                                    </div>
                                    <p className="text-white font-semibold mt-[10px]">SSC</p>
                                    <p className="text-[12px]">Science</p>
                                    <p>Monipur High School and College</p>
                                    <p>Location: Dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className="language pt-5">
                                <h3 className="font-bold text-[20px] text-white popFont flex items-center gap-2 ml-[20px]  mb-3">
                                    <HiMiniLanguage className="text-[35px] text-[#78cc6d]" />
                                    Language
                                </h3>
                                <div className="border-y-[1px] border-[#3d3d47]  ml-[20px] grid gap-6 pt-5 pb-[45px]">
                                    <div>
                                        <p className="font-medium text-white">English - <span className="text-gray-400 text-[12px]">Beginner</span></p>
                                        <progress className="progress progress-success w-56" value="1" max="4"></progress>
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Bangla - <span className="text-gray-400 text-[12px]">Native</span></p>
                                        <progress className="progress progress-success w-56" value="4" max="4"></progress>
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Hindi - <span className="text-gray-400 text-[12px]">Intermediate</span></p>
                                        <progress className="progress progress-success w-56" value="2" max="4"></progress>
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">Urdu - <span className="text-gray-400 text-[12px]">Beginner</span></p>
                                        <progress className="progress progress-success w-56" value="1" max="4"></progress>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Education and language section ends */}

                    {/* Skills section starts */}
                    <div className="skill_section mt-[30px]">
                        <div className="mx-[30px] mb-5 flex items-center gap-2">
                            <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#61ce70]">S</span>kills</h3>
                            <GiBiceps className="text-[20px] text-[#61ce70]" />
                        </div>
                        <div className="divider m-0 h-0"></div>
                        <div className="grid md:grid-cols-3 gap-5 px-[30px] justify-items-center mt-5">
                            {/* html */}
                            <SkillsComponent
                                skillPNG={htmlPNG}
                                skill={'HTML'}
                                percents={'93%'}
                            ></SkillsComponent>

                            {/* css */}
                            <SkillsComponent
                                skillPNG={cssPNG}
                                skill={'CSS'}
                                percents={'90%'}
                            ></SkillsComponent>

                            {/* javascript */}
                            <SkillsComponent
                                skillPNG={jsPNG}
                                skill={'JS'}
                                percents={'65%'}
                            ></SkillsComponent>

                            {/* react js */}
                            <SkillsComponent
                                skillPNG={reactPNG}
                                skill={'React'}
                                percents={'80%'}
                            ></SkillsComponent>

                            {/* Node js */}
                            <SkillsComponent
                                skillPNG={nodePNG}
                                skill={'Node.js'}
                                percents={'50%'}
                            ></SkillsComponent>

                            {/* express js */}
                            <SkillsComponent
                                skillPNG={expressPNG}
                                skill={'Express'}
                                percents={'50%'}
                            ></SkillsComponent>

                            {/* mongodb */}
                            <SkillsComponent
                                skillPNG={mongoDB}
                                skill={'MongoDB'}
                                percents={'43%'}
                            ></SkillsComponent>

                            {/* Tailwind css */}
                            <SkillsComponent
                                skillPNG={tailwindPNG}
                                skill={'Tailwind CSS'}
                                percents={'95%'}
                            ></SkillsComponent>

                            {/* Bootstrap */}
                            <SkillsComponent
                                skillPNG={bootstrapPNG}
                                skill={'Bootstrap'}
                                percents={'60%'}
                            ></SkillsComponent>
                        </div>
                    </div>
                    {/* Skills section ends */}
                </div>
            </div>
        </div>
    );
};

export default About;