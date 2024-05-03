import { useAtom } from 'jotai';
import { dayModeAtom } from '../../../atom/day-mode';
import { useState } from 'react'; // Import useState hook
import { Fade } from 'react-swift-reveal';
import { FaGithub, FaHandPointLeft } from 'react-icons/fa';
import { FaHandPointRight } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

export const ShowRoom = () => {
    const [dayModeAtomValue] = useAtom(dayModeAtom);
    const [currentSlide, setCurrentSlide] = useState(0); // State for current slide index

    const changeSlide = (index: number) => { // Specify type for index parameter
        setCurrentSlide(index);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + dummyData.length) % dummyData.length); // Update to use dummyData.length
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % dummyData.length); // Update to use dummyData.length
    };

    const dummyData = [
        {
          id: 1,
          title: 'SnapToApp',
          imageUrl: 'https://snaptoapp.com/assets/PreviewBuildingMB2-78e5ef7d.png',
          type: 'Hooli Software Inc.',
          content: 'SnapToApp is an innovative app builder platform designed to cater to various users, from small business owners to established organizations. With its user-friendly interface, you can create and customize mobile apps without any coding knowledge.',
          languange: ['REACT','TYPESCRIPT', 'TAILWINDCSS', 'GOLANG'],
          link: 'https://snaptoapp.com/'
        },
        {
          id: 2,
          title: 'Yokai Express',
          imageUrl: 'https://static.wixstatic.com/media/6663d6_a8a8d3fe49f5423f912347d5616529d0~mv2_d_1920_1280_s_2.jpg/v1/fill/w_1857,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6663d6_a8a8d3fe49f5423f912347d5616529d0~mv2_d_1920_1280_s_2.jpg',
          type: 'Hooli Software Inc.',
          content: 'SnapToApp is an innovative app builder platform designed to cater to various users, from small business owners to established organizations. With its user-friendly interface, you can create and customize mobile apps without any coding knowledge.',
          languange: ['REACT','TYPESCRIPT', 'TAILWINDCSS', 'SPRINGBOOT'],
          link: 'https://example.com/link2'
        },
        {
          id: 3,
          title: 'Chronex',
          imageUrl: 'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          type: 'Personal Project',
          content: 'Explore unparalleled elegance and precision in our collection of watches. Where sophistication meets technology, elevate every moment with timeless style. Browse now for the epitome of class and clarity.',
          link: 'https://chronex-frontend.onrender.com/',
          languange: ['REACT','TYPESCRIPT', 'TAILWINDCSS', 'GOLANG'],
          githubFrontend: 'https://github.com/ir3ax/chronex-frontend.git',
          githubBackend: 'https://github.com/ir3ax/chronex-backend.git'
        },
      ];

      return (
        <>
            <Fade delay={200} duration={2000}>
                <div className='flex flex-col justify-center items-center w-full pt-32'>
                    <Fade delay={400} duration={2000}>
                        <div className={`flex justify-center items-center p-4 pr-12 pl-12 border ${dayModeAtomValue ? 'border-2 border-[#10E956] bg-[#12141D]' : 'border-2 border-[#333333] bg-[#f7f7f2]'} rounded-md`}>
                            <h2 className={`connect-with-me text-4xl font-semibold  tracking-wider ${dayModeAtomValue ? 'text-[#10E956]' : 'text-[#212121]'}`}>SHOWROOM</h2>
                        </div>
                    </Fade>
                    <div className={`relative flex flex-col justify-center items-center min-h-[100dvh] max-sm:min-h-[65dvh] mt-12 p-4 pr-12 pl-12 max-sm:pl-5 max-sm:pr-5 ${dayModeAtomValue ? 'border-b-2 border-t-2 border-[#10E956]' : 'border-b-2 border-t-2 border-[#333333] bg-[#f7f7f2]'} w-[100%] max-sm:w-full`} style={{ backgroundImage: `url('${dummyData[currentSlide].imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className={`${dayModeAtomValue ? 'opacity-70' : 'opacity-70'} absolute inset-0 bg-black`} style={{ mixBlendMode: 'multiply' }}></div>
                            <div className='mt-4 mb-4 w-full'>
                                {/* Carousel */}
                                <div className='relative w-full h-full'>
                                    {/* Carousel wrapper */}
                                    <div className='relative w-full h-full overflow-hidden rounded-lg opacity-100'>
                                        {dummyData.map((slide, index) => (
                                            <div key={index} className={`carousel-item ${index === currentSlide ? '' : 'hidden'} w-full h-full`}>
                                                
                                                <div className='relative w-full h-full flex justify-center items-center'>

                                                    <div className={`2xl:w-[60%] xl:w-[60%] lg:w-[60%] sm:w-[100%] rounded-lg text-white ${dayModeAtomValue ? 'text-green-500' : 'text-gray-300'} font-semibold bg-[#f3f3f3]  min-h-[35rem] max-sm:min-h-[26rem] `}>
                                                        <div className='shadow-md shadow-[#333333] rounded-tl-lg rounded-tr-lg relative flex flex-col justify-center items-center min-h-[40dvh] max-sm:min-h-[20dvh]' style={{ backgroundImage: `url('${slide.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                                        
                                                        <div className='w-full overflow-auto max-h-[25dvh] pb-6'>
                                                            <div className='w-full ml-2 mr-2 mt-2 flex flex-col justify-start items-start leading-tight max-sm:pr-8'>
                                                               <span className='connect-with-me-showroom text-[42px] font-bold text-green-500 max-sm:text-[36px]'>{slide.title}</span>
                                                               <span className='ml-1 text-[14px] font-bold text-[#8f8f8f] underline'>{slide.type}</span>
                                                            </div>  
                                                            <div className='w-full ml-2 mr-2 mt-4 flex flex-col justify-start items-start leading-tight max-sm:pr-8'>
                                                                <span className='ml-1 text-[14px] max-sm:text-[12px] font-normal text-[#272727] tracking-wider'>
                                                                    {slide.content}
                                                                </span>
                                                            </div>
                                                            <div className='w-full ml-2 mr-2 mt-6 flex justify-start items-start gap-1 max-sm:grid max-sm:grid-cols-2 max-sm:pr-8'>
                                                                {
                                                                    slide.languange?.map((index, key) => (
                                                                        <div key={key} className='px-4 py-1 text-[11px] rounded-md bg-[#2f447e] tracking-wide'>{index}</div>
                                                                    )) 
                                                                }
                                                            </div>
                                                            <div className='w-full ml-2 mr-2 flex gap-2 max-sm:pr-8 max-sm:flex-col max-sm:gap-0 max-sm:mt-2'>
                                                                {
                                                                    slide.githubFrontend && (
                                                                        <a target='_blank' href={slide.githubFrontend} className='max-sm:w-[67%] mt-2 flex gap-2 px-4 py-1 bg-[#333333] text-sm text-white rounded-md hover:bg-[#252629]'>
                                                                            Github Frontend
                                                                            <span className='mt-[2px]'>
                                                                                <FaGithub className='w-4 h-4' />
                                                                            </span>
                                                                        </a>
                                                                    )
                                                                }
                                                                {
                                                                    slide.githubBackend && (
                                                                        <a target='_blank' href={slide.githubBackend} className='max-sm:w-[67%] mt-2 flex gap-2 px-4 py-1 bg-[#333333] text-sm text-white rounded-md hover:bg-[#252629]'>
                                                                            Github Backend
                                                                            <span className='mt-[2px]'>
                                                                                <FaGithub className='w-4 h-4' />
                                                                            </span>
                                                                        </a>
                                                                    )
                                                                }
                                                                <a target='_blank' href={slide.link} className='max-sm:w-[40%] mt-2 flex gap-2 px-4 py-1 bg-[#f3f3f3] border border-black text-sm text-[#333333] rounded-md hover:bg-[#d8d8d8]'>
                                                                    Visit
                                                                    <span className='mt-[2px]'>
                                                                        <TbWorldWww className='w-4 h-4' />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Slider indicators */}
                                    <div className='absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-3 rtl:space-x-reverse z-30'>
                                        {dummyData.map((__, index) => (
                                            <button key={index} type='button' className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-400'}`} aria-label={`Slide ${index + 1}`} onClick={() => changeSlide(index)}></button>
                                        ))}
                                    </div>
                                    {/* Slider controls */}
                                    <button type='button' className='max-sm:hidden absolute top-0 -start-10 max-sm:-start-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' onClick={prevSlide}>
                                        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 group-hover:bg-white/50 ${dayModeAtomValue ? 'bg-gray-800/30 group-focus:ring-gray-800/70 group-hover:bg-gray-800/60' : null} group-focus:ring-4 group-focus:ring-white group-focus:outline-none`}>
                                            <FaHandPointLeft className='w-6 h-6' />
                                            <span className='sr-only'>Previous</span>
                                        </span>
                                    </button>
                                    <button type='button' className='max-sm:hidden absolute top-0 -end-10 max-sm:-end-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' onClick={nextSlide}>
                                        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 group-hover:bg-white/50 ${dayModeAtomValue ? 'bg-gray-800/30 group-focus:ring-gray-800/70 group-hover:bg-gray-800/60' : null} group-focus:ring-4 group-focus:ring-white group-focus:outline-none`}>
                                            <FaHandPointRight className='w-6 h-6' />
                                            <span className='sr-only'>Next</span>
                                        </span>
                                    </button>
                                </div>
                                {/* End of Carousel */}
                            </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};
