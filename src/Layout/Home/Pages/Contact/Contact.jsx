import { MdArrowRightAlt } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <div className="h-[673px] py-[10px]">
                <div className="bg-[#31313a] w-[685px] h-full pt-6 overflow-hidden overflow-y-scroll pb-[40px]">
                    <div className="contact_section">
                        <div className="mx-[30px] mb-5">
                            <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#61ce70]">G</span>et in Touch</h3>
                        </div>
                        <div className="divider m-0 h-0"></div>
                    </div>
                    <div className="flex justify-center mt-[30px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7306.9560473042875!2d90.47073600000003!3d23.6946177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1702308476445!5m2!1sen!2sbd" width="600" height="225" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="p-[30px] grid grid-cols-2 gap-7">
                        <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                            <span className="bg-[#61ce70] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Address:</span>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                            <span className="bg-[#61ce70] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Email:</span>
                            <span className="text-[14px]">tanbirhaque53@gmail.com</span>
                        </div>
                        <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                            <span className="bg-[#61ce70] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Phone:</span>
                            <span>+8001646740414</span>
                        </div>
                        <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                            <span className="bg-[#61ce70] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Freelance:</span>
                            <span>Available</span>
                        </div>
                    </div>

                    <div className="contact_section">
                        <div className="mx-[30px] mb-5">
                            <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#61ce70]">C</span>ontact Form</h3>
                        </div>
                        <div className="divider m-0 h-0"></div>
                        <div className="px-[30px] pt-[30px]">
                            <form>
                                <div className="grid grid-cols-2 gap-7">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="py-[10px] pl-[15px] bg-transparent border-[2px] border-[#666] text-[#61ce70] focus:outline-none focus:ring-2 focus:ring-[#61ce70] focus:border-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Email Address"
                                        className="py-[10px] pl-[15px] bg-transparent border-[2px] border-[#666] text-[#61ce70] focus:outline-none focus:ring-2 focus:ring-[#61ce70] focus:border-none"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        type="text"
                                        placeholder="Your Message"
                                        className="w-full h-[100px] p-[15px] bg-transparent border-[2px] border-[#666] text-[#61ce70] focus:outline-none focus:ring-2 focus:ring-[#61ce70] focus:border-none"
                                    />
                                </div>
                                <div className="flex items-center mt-6">
                                    <p className="text-white uppercase font-semibold text-[14px]">Send Message</p>
                                    <MdArrowRightAlt className="text-[26px] text-white"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;