import { useAtom } from 'jotai';
import {
  Bounce,
  Fade,
} from 'react-swift-reveal';
import { dayModeAtom } from '../../atom/day-mode';
import { Projects } from './projects';

export const Dashboard = () => {

  const [dayModeAtomValue, ] = useAtom(dayModeAtom);

  return (
     <>
        <div className={`w-full h-[100vh] flex pr-20 pl-20 items-center max-sm:p-6 shadow-2xl ${dayModeAtomValue ? 'transition-all duration-1000 bg-[#050810] shadow-[#0f131c]' : 'transition-all duration-1000 bg-[#f7f7f2] shadow-[#eaeae6]'}`}>
          <div className='flex flex-col justify-start items-start gap-y-6'>
          <Fade delay={400} duration={2000}>
            <div className='content relative pr-20 pl-20 max-sm:pl-0 max-sm:pr-0 w-full'>
              <h1 style={{ WebkitTextStroke: `2px ${dayModeAtomValue ? '#10E956' : '#7410F7'}` }} className='max-sm:ml-[10.5rem] ml-[19.5rem] flex justify-center items-center text-6xl tracking-tighter font-medium max-sm:text-3xl'>I'm Mark Limuel Fernando</h1>
              <h1 style={{ color: `${dayModeAtomValue ? '#10E956' : '#7410F7'}` }} className='max-sm:ml-[10.5rem] ml-[19.5rem] flex justify-center items-center text-6xl tracking-tighter font-medium max-sm:text-3xl'>I'm Mark Limuel Fernando</h1>
            </div>
            <div className='mt-12 flex flex-col gap-y-6'>
            <Fade delay={800} duration={2000}>
              <p className='text-md max-sm:text-sm'>Your friendly neighborhood full stack developer who specializes in web development. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, transforming zeros and ones into immersive, interactive experiences,</p>
            </Fade>
            <Fade delay={1200} duration={2000}>
              <p className='text-md max-sm:text-sm'>I follow the road of minimalism, finding beauty in simplicity and efficiency. When I'm not creating stunning web experiences, you can find me enjoying playing online games or swaying to the rhythm of Pop Music and Rock, immersing myself in the enchanting flow of music.</p>
            </Fade>
            </div>
              <div className='flex justify-center items-center pt-12 w-full'>
                <Bounce delay={1600} duration={2000}>
                  <span className="scroll-btn w-full">
                    <a href="#tooling" className={`mouse cursor-pointer w-12 h-16 border-2 ${dayModeAtomValue ? 'border-[#10E956]' : 'border-[#212121]'} rounded-3xl`}>
                        <span className={`${dayModeAtomValue ? 'bg-gray-300' : 'bg-[#7410F7]'}`} />
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
      </>
  );
};
