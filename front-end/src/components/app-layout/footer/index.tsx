import { useAtom } from "jotai";
import { dayModeAtom } from "../../../atom/day-mode";
import { Fade } from "react-swift-reveal";
import { SiMinutemailer } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  
    const [ dayModeAtomValue ] = useAtom(dayModeAtom);


    return (
        <Fade delay={200} duration={2000}>
            <div className={`${dayModeAtomValue ? 'transition-colors duration-1000 bg-[#050810] w-full text-gray-300' : 'transition-colors duration-1000 w-full text-[#212121]'} pt-8 max-sm:p-0 max-md:pt-0 z-50`}>
                <div className='flex flex-col justify-center items-center w-full pt-24'>
                    <Fade delay={400} duration={2000}>
                        <div className={`flex justify-center items-center p-4 pr-12 pl-12 rounded-md`}>
                            <h2 className={`connect-with-me-connect text-6xl max-sm:text-4xl font-semibold rotate-3 tracking-wider ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#212121]'}`}>CONNECT WITH ME</h2>
                        </div>
                    </Fade>
                    <Fade delay={600} duration={2000}>
                        <div className={`mt-16 w-full grid grid-cols-4 max-sm:grid-cols-2 border ${dayModeAtomValue ? 'border-2 border-[#10E956] bg-[#12141D]' : 'border-2 border-[#585858] bg-[#f7f7f2]'}`}>
                            <a className={`flex justify-center items-center gap-4 h-28 border-r-2 ${dayModeAtomValue ? 'border-[#10E956]' : 'border-[#585858] text-gray-300' } bg-[#333333] hover:bg-[#252629]`}>
                                <span className='flex justify-center items-center w-full text-3xl max-sm:text-2xl font-semibold max-sm:ml-2'>GitHub</span>
                                <span className='flex justify-center items-center w-full'><FaGithub className='w-12 h-12 max-sm:w-10 max-sm:h-10' /></span>
                            </a>
                            <div className={`flex justify-center items-center gap-4 h-28 border-r-2 ${dayModeAtomValue ? 'border-[#10E956]' : 'border-[#585858] text-gray-300' } bg-[#0077B5] hover:bg-[#015584]`}>
                                <span className='flex justify-center items-center w-full text-3xl max-sm:text-2xl font-semibold max-sm:ml-2'>LinkedIn</span>
                                <span className='flex justify-center items-center w-full'><FaLinkedin className='w-12 h-12 max-sm:w-10 max-sm:h-10' /></span>
                            </div>
                            <div className={`flex justify-center items-center gap-4 h-28 border-r-2 ${dayModeAtomValue ? 'border-[#10E956]' : 'border-[#585858] text-gray-300' } bg-[#006CFF] hover:bg-[#014EB8]`}>
                                <span className='flex justify-center items-center w-full text-3xl max-sm:text-2xl font-semibold max-sm:ml-2'>Facebook</span>
                                <span className='flex justify-center items-center w-full'><FaFacebook className='w-12 h-12 max-sm:w-10 max-sm:h-10' /></span>
                            </div>
                            <div className={`flex justify-center items-center gap-4 h-28 border-r-2 ${dayModeAtomValue ? 'border-[#10E956]' : 'border-[#585858] text-gray-300' } bg-[#DD0387] hover:bg-[#9E196A]`}>
                                <span className='flex justify-center items-center w-full text-3xl max-sm:text-2xl font-semibold max-sm:ml-2'>Instagram</span>
                                <span className='flex justify-center items-center w-full'><FaInstagram className='w-12 h-12 max-sm:w-10 max-sm:h-10' /></span>
                            </div>
                        </div>
                        <a href='mailto:it.marklimuelfernando@gmail.com' className={`connect-with-me w-full h-20 flex justify-center items-center gap-6 border-2 text-5xl text-gray-300 ${dayModeAtomValue ? 'border-[#10E956] bg-[#2faf57] hover:bg-[#0C8536]' : 'border-[#585858] bg-[#444242] hover:bg-[#252629]' } cursor-pointer`}>
                            SHOOT ME AN EMAIL
                           <SiMinutemailer className='w-10 h-10' />
                        </a>
                    </Fade>
                    <Fade delay={800} duration={2000}>
                        <div className={`mt-20 font-bold ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#212121]' } text-sm max-sm:text-sm max-sm:text-center`}>© Copyright 2024, Created by Mark Limuel Fernando. All Rights Reserved.</div>
                    </Fade>
                </div>
            </div>
        </Fade>
    );
}
