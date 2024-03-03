import './skills.css'


const SkillsComponent = ({skillPNG, skill, percents}) => {
    return (
        <div className="skill_div pb-[10px] w-full md:w-fit">
            <div className="skill_border border-[1px] w-full sm:w-fit border-[#3d3d47] inline-block bg-[#1f1f1f] p-3 rounded-2xl">
                <div className="flex flex-col items-center">
                    <div className="w-[55px] h-[55px] mt-[10px] grid items-center">
                        <img src={skillPNG} alt="" />
                    </div>
                    <div>
                        <p className="font-bold text-white text-[18px] my-[10px]">{skill}</p>
                    </div>
                    <div className="skill_percentage bg-[#131313] p-[10px] w-[140px] text-center rounded-2xl">
                        <p className="font-bold text-[#656565] text-[20px]">{percents}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsComponent;