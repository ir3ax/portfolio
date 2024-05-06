import { useAtom } from 'jotai';
import {
  Bounce,
  Fade,
} from 'react-swift-reveal';
import { dayModeAtom } from '../../atom/day-mode';
import { Projects } from './projects';
import { ShowRoom } from './showroom';
import { Experiences } from './experiences';
import { IoMdCloudDownload } from "react-icons/io";
import CvPdf from '../../assets/CV/CV-Fernando-Mark-Limuel-A..pdf';

export const Dashboard = () => {

  const [dayModeAtomValue, ] = useAtom(dayModeAtom);

  return (
     <>
        <div id='home' className={`w-full h-[100vh] flex pr-20 pl-20 items-center max-sm:p-6 shadow-2xl ${dayModeAtomValue ? 'transition-all duration-1000 bg-[#050810] shadow-[#0f131c]' : 'transition-all duration-1000 bg-[#f7f7f2] shadow-[#eaeae6]'}`}>
          <div className='flex flex-col justify-start items-start gap-y-6 2xl:pr-40 2xl:pl-40 xl:pr-30 xl:pl-30 lg:pr-10 lg:pl-10'>
          <Fade delay={400} duration={2000}>
            <div className='content relative pr-20 pl-20 max-sm:pl-0 max-sm:pr-0 w-full'>
              <h1 style={{ WebkitTextStroke: `2px ${dayModeAtomValue ? '#10E956' : '#333333'}` }} className='max-sm:ml-[12rem] ml-[19.5rem] flex justify-center items-center text-6xl tracking-tighter font-medium max-sm:text-3xl'>I'm Mark Limuel Fernando</h1>
              <h1 style={{ color: `${dayModeAtomValue ? '#10E956' : '#333333'}` }} className='max-sm:ml-[12rem] ml-[19.5rem] flex justify-center items-center text-6xl tracking-tighter font-medium max-sm:text-3xl'>I'm Mark Limuel Fernando</h1>
            </div>
            <div className='mt-12 flex flex-col gap-y-6'>
              <Fade delay={800} duration={2000}>
                <p className='text-md max-sm:text-sm'>Your friendly neighborhood full stack developer who specializes in web development. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, transforming zeros and ones into immersive, interactive experiences,</p>
              </Fade>
              <Fade delay={1200} duration={2000}>
                <p className='text-md max-sm:text-sm'>I follow the road of minimalism, finding beauty in simplicity and efficiency. When I'm not creating stunning web experiences, you can find me enjoying playing online games or swaying to the rhythm of Pop Music and Rock, immersing myself in the enchanting flow of music.</p>
              </Fade>
              <Fade delay={1400} duration={2000}>
                <a href={CvPdf} download="CV-Fernando-Mark-Limuel-A." target="_blank" rel="noreferrer" className={`flex gap-4 w-[15%] max-sm:w-[55%] p-4 ${dayModeAtomValue ? 'bg-[#10E956] rounded-xl font-bold text-gray-600 hover:bg-[#4dd678]' : 'bg-[#333333] rounded-xl font-bold text-gray-300 hover:bg-[#4d4c4c]'}`}>
                    Download CV
                    <IoMdCloudDownload className='w-6 h-6' />
                </a>
              </Fade>
            </div>
              <div className='flex justify-center items-center pt-12 w-full'>
                <Bounce delay={1600} duration={2000}>
                  <span className="scroll-btn w-full">
                    <a href="#tooling" className={`mouse cursor-pointer w-12 h-16 border-2 ${dayModeAtomValue ? 'border-[#10E956]' : 'border-[#212121]'} rounded-3xl`}>
                        <span className={`${dayModeAtomValue ? 'bg-gray-300' : 'bg-[#333333]'}`} />
                    </a>
                  </span>
                </Bounce>
              </div>
          </Fade>
          </div>
        </div>

        <div id='tooling' className='w-full h-full flex pr-20 pl-20 items-center max-sm:p-6'>
            <Projects />
        </div>

        <div id='showroom' className='w-full h-full flex items-center max-sm:p-6'>
            <ShowRoom />
        </div>

        <div id='experiences' className='w-full h-full flex items-center max-sm:p-6'>
            <Experiences />
        </div>
      </>
  );
};
