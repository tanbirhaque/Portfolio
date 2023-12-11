import bannerIMG from '../../../../assets/Images/man5_big.jpeg'
import { MdDownload } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
// import resume from "../../../../assets/"
const Banner = () => {
    return (
        <div>
            <div
                className="bannerContainer bg-[#31313a] max-w-[480px] overflow-hidden rounded-md relative"
                style={{ boxShadow: "3px 0 8px rgba(0, 0, 0, 0.5)" }}
            >
                <div className="pictureDiv min-h-[384px]">
                    <img src={bannerIMG} className="min-h-[384px]" alt="" />
                </div>
                <div className="text-div text-center mb-[100px] mt-[20px] relative">
                    <div className='z-10 relative'>
                        <h1 className='text-[32px] font-bold'>Tanbir Haque Anil</h1>
                        <h3>Web developer</h3>
                        <ul className='flex justify-center gap-2 mt-[20px]'>
                            <li><FaGithub /></li>
                            <li><FaGithub /></li>
                        </ul>
                    </div>
                    <div className='rightdiv h-[200px] w-full absolute bg-[#31313a] top-[-29px] left-[-60px] rotate-[10deg] z-0]'></div>
                    <div className='leftdiv h-[200px] w-full absolute bg-[#31313a] top-[-29px] right-[-60px] -rotate-[10deg] z-0'></div>
                </div>
                <div className="btnDiv uppercase font-bold text-white text-[14px] grid grid-cols-2 justify-center border-t-[1px] relative">
                    <div className='py-[20px]'>
                        <h3 className='flex gap-3 items-center justify-center border-r-[1px]'>
                            <a href="../../../../assets/TanbirHaqueAnilResume (6).pdf" download>
                                download CV
                            </a>
                            <MdDownload />
                        </h3>
                    </div>
                    <div className='py-[20px]'>
                        <h3 className='flex gap-3 items-center justify-center'>
                            Contact me
                            <IoMdMail />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;