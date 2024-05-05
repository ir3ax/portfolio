import { useAtom } from 'jotai';
import { dayModeAtom } from '../../../atom/day-mode';
import { Fade } from 'react-swift-reveal';
import { FaCode } from "react-icons/fa6";

export const Experiences = () => {
    const [dayModeAtomValue] = useAtom(dayModeAtom);

      return (
        <>
            <Fade delay={200} duration={2000}>
                <div className='flex flex-col justify-center items-center w-full pt-32'>
                    <Fade delay={400} duration={2000}>
                        <div className={`flex justify-center items-center p-4 pr-12 pl-12 border ${dayModeAtomValue ? 'border-2 border-[#10E956] bg-[#12141D]' : 'border-2 border-[#333333] bg-[#f7f7f2]'} rounded-md`}>
                            <h2 className={`connect-with-me text-4xl font-semibold  tracking-wider ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#212121]'}`}>My Experiences</h2>
                        </div>
                    </Fade>
                    <Fade delay={600} duration={2000}>
                        <div className='max-sm:w-[100%] w-[80%] h-full grid grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 max-sm:gap-2'>
                            <div className={`mt-12 flex flex-col justify-start items-start p-4 pr-6 pl-6 border ${dayModeAtomValue ? 'border-2 border-[#10E956] bg-[#12141D] text-[#ffffff]' : 'border-2 border-[#333333] bg-[#f7f7f2] text-[#212121]'} rounded-md`}>
                                <h1 className={`text-sm font-semibold  tracking-wider`}><span className={`text-sm ${dayModeAtomValue ? 'text-[#5d709b]' : 'text-[#a0acc7]'} `}>June 2022-February 2024:</span> Full-stack Software Engineer</h1>
                                <h2 className={`text-sm font-semibold  tracking-wider`}>Hooli Software Inc.</h2>
                                <div className='mt-4 flex flex-col justify-start items-start gap-1'>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Created RESTful APIs using SpringBoot, utilizing a microservices architecture.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Created RESTful APIs using GoLang, utilizing a microservices architecture.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Developed a secure online payment system using Stripe.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Resolved bugs and optimized website performance proactively.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Contributed to designing a user-friendly interface with a focus on prioritizing user experiences.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Collaborated with developers, designers, and product managers to implement and promote web accessibility best practices.</p>
                                </div>
                            </div>
                            <div className={`max-sm:w-[100%] mt-12 flex flex-col justify-start items-start p-4 pr-6 pl-6 border ${dayModeAtomValue ? 'border-2 border-[#10E956] bg-[#12141D] text-[#ffffff]' : 'border-2 border-[#333333] bg-[#f7f7f2] text-[#212121]'} rounded-md`}>
                                <h1 className={`text-sm font-semibold  tracking-wider`}><span className={`text-sm ${dayModeAtomValue ? 'text-[#5d709b]' : 'text-[#a0acc7]'} `}>March 2022-June 2022:</span> Software Engineer Intern</h1>
                                <h2 className={`text-sm font-semibold  tracking-wider`}>Hooli Software Inc.</h2>                  
                                <div className='mt-4 flex flex-col justify-start items-start gap-1'>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Familiarized myself with their tech stack using provided training materials.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Actively engaged in bug fixing and issue resolution.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> As part of my training, I concentrated mostly on the application's front end.</p>
                                    <p className={`flex justify-start items-start gap-3 text-[12px]`}><span className={`w-4 h-4 ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#4869b6]'}`}><FaCode  /></span> Learned the code structure and analyzed the workflow.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </>
    );
};
