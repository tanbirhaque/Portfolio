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

const About = () => {
    return (
        <div>
            <div className="h-[673px] py-[10px]">
                <div className="bg-[#31313a] w-[685px] h-full pt-6 overflow-hidden overflow-y-scroll">
                    {/* About me section starts */}
                    <div className="about_section">
                        <div className="mx-[30px] mb-5">
                            <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#61ce70]">A</span>bout Me</h3>
                        </div>
                        <div className="divider m-0 h-0"></div>
                        <div className="grid grid-cols-2">
                            <div className="p-[30px] border-[#3d3d47] border-r-[1px]">
                                <p>
                                    <span className="font-bold">Hello! I’m Ryan Adlard.</span>
                                    <br />
                                    <span className="font-medium">
                                        Web designer from USA, California. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
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
                    </div>
                    {/* About me section ends */}

                    {/* Services section starts */}
                    <div className="services_section mt-[30px]">
                        <div className="mx-[30px] mb-5">
                            <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#61ce70]">S</span>kills</h3>
                        </div>
                        <div className="divider m-0 h-0"></div>
                        <div className="grid grid-cols-3 gap-5 px-[30px] justify-items-center mt-5">
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
                    {/* Services section ends */}
                </div>
            </div>
        </div>
    );
};

export default About;