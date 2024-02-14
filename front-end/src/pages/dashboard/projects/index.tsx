
import { useAtom } from 'jotai';
import { dayModeAtom } from '../../../atom/day-mode';
import { Fade } from 'react-swift-reveal';
//DarkMode
import HTML from '../../../assets/teckstack-darkmode/html.png'
import CSS from '../../../assets/teckstack-darkmode/css-3.png'
import JS from '../../../assets/teckstack-darkmode/java-script.png'
import Tailwind from '../../../assets/teckstack-darkmode/tailwindcss.png'
import Bootstrap from '../../../assets/teckstack-darkmode/bootstrap.png'
import TypeScript from '../../../assets/teckstack-darkmode/typescript.png'
import React from '../../../assets/teckstack-darkmode/react.png'
import Jotai from '../../../assets/teckstack-darkmode/jotai.png'
import Git from '../../../assets/teckstack-darkmode/commit-git.png'
import SpringBoot from '../../../assets/teckstack-darkmode/spring-boot.png'
import Go from '../../../assets/teckstack-darkmode/go.png'
import Python from '../../../assets/teckstack-darkmode/python.png'
import MySql from '../../../assets/teckstack-darkmode/mysql.png'
import PostGres from '../../../assets/teckstack-darkmode/postgre.png'
import RestApi from '../../../assets/teckstack-darkmode/api.png'
import Shopify from '../../../assets/teckstack-darkmode/shopify.png'
//DayMode
import HTMLDay from '../../../assets/techstack-daymode/html.png'
import CSSDay from '../../../assets/techstack-daymode/css-3.png'
import JSDay from '../../../assets/techstack-daymode/java-script.png'
import TailwindDay from '../../../assets/techstack-daymode/tailwindcss.png'
import BootstrapDay from '../../../assets/techstack-daymode/bootstrap.png'
import TypeScriptDay from '../../../assets/techstack-daymode/typescript.png'
import ReactDay from '../../../assets/techstack-daymode/react.png'
import JotaiDay from '../../../assets/techstack-daymode/jotai.png'
import GitDay from '../../../assets/techstack-daymode/commit-git.png'
import SpringBootDay from '../../../assets/techstack-daymode/spring-boot.png'
import GoDay from '../../../assets/techstack-daymode/go.png'
import PythonDay from '../../../assets/techstack-daymode/python.png'
import MySqlDay from '../../../assets/techstack-daymode/mysql.png'
import PostGresDay from '../../../assets/techstack-daymode/postgre.png'
import RestApiDay from '../../../assets/techstack-daymode/api.png'
import ShopifyDay from '../../../assets/techstack-daymode/shopify.png'

import { TechStack } from './techstack-card';

export const Projects = () => {
const [dayModeAtomValue] = useAtom(dayModeAtom);

const techStackData = [
    {
      "img":dayModeAtomValue ? HTML : HTMLDay,
      "imgName":"HTML5",
    },
    {
      "img":dayModeAtomValue ? CSS : CSSDay,
      "imgName":"CSS3",
    },
    {
      "img":dayModeAtomValue ? JS : JSDay,
      "imgName":"JavaScript",
    },
    {
      "img":dayModeAtomValue ? Tailwind : TailwindDay,
      "imgName":"TailwindCss",
    },
    {
      "img":dayModeAtomValue ? Bootstrap : BootstrapDay,
      "imgName":"Bootstrap",
    },
    {
      "img":dayModeAtomValue ? TypeScript : TypeScriptDay,
      "imgName":"TypeScript",
    },
    {
      "img":dayModeAtomValue ? React : ReactDay,
      "imgName":"React",
    },
    {
      "img":dayModeAtomValue ? Jotai : JotaiDay,
      "imgName":"Jotai",
    },
    {
      "img":dayModeAtomValue ? Git : GitDay,
      "imgName":"Git",
    },
    {
      "img":dayModeAtomValue ? SpringBoot : SpringBootDay,
      "imgName":"SpringBoot",
    },
    {
      "img":dayModeAtomValue ? Go : GoDay,
      "imgName":"GoLang",
    },
    {
      "img":dayModeAtomValue ? Python : PythonDay,
      "imgName":"Python",
    },
    {
      "img":dayModeAtomValue ? MySql : MySqlDay,
      "imgName":"MySQL",
    },
    {
      "img":dayModeAtomValue ? PostGres : PostGresDay,
      "imgName":"PostgreSql",
    },
    {
      "img":dayModeAtomValue ? RestApi : RestApiDay,
      "imgName":"Rest Api",
    },
    {
      "img":dayModeAtomValue ? Shopify : ShopifyDay,
      "imgName":"Shopify",
    },
]

  return (
    <>
        <Fade delay={200} duration={2000}>
        <div className='flex flex-col justify-center items-center w-full pt-32'>
          <Fade delay={400} duration={2000}>
            <div className={`flex justify-center items-center p-4 pr-12 pl-12 border ${dayModeAtomValue ? 'border-2 border-[#10E956] bg-[#12141D]' : 'border-2 border-[#7511F7] bg-[#f7f7f2]'} rounded-md`}>
              <h2 className={`text-3xl font-semibold ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#212121]'}`}>TOOLING</h2>
            </div>
          </Fade>
          <Fade delay={600} duration={2000}>
          <div className={`flex flex-col justify-center items-center mt-12 p-4 pr-12 pl-12 border ${dayModeAtomValue ? 'border-2 border-[#314437] bg-[#0C8C34]' : 'border-2 border-[#7511F7] bg-[#f7f7f2]'} rounded-md w-[80%] max-sm:w-full`}>
            <div className='mt-4 mb-4 grid grid-cols-4 gap-6 max-sm:grid-cols-1'>
              {
              techStackData.map((index, key) => (
                <Fade key={key} delay={1200} duration={2000}>
                  <TechStack img={index.img} imgName={index.imgName} />
                </Fade>
                ))
              }
            </div>     
          </div>
          </Fade>
        </div>
        </Fade>
    </>
  );
};
