import { useAtom } from "jotai";
import { dayModeAtom } from "../../../atom/day-mode";
import { useState } from "react";
import LimLogoDay from '../../../assets/lim-day-mode.png'
import LimLogoNight from '../../../assets/lim-night-mode.png'

export const TopBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [animateBounce, setAnimateBounce] = useState(false);
    const [dayModeAtomValue, setDayModeAtomValue] = useAtom(dayModeAtom);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        setAnimateBounce(true);
        setTimeout(() => setAnimateBounce(false), 1000);
    };

    return (
        <nav className={`${dayModeAtomValue ? 'transition-colors duration-1000 bg-[#050810] w-full text-gray-300' : 'transition-colors duration-1000 bg-[#f7f7f2] w-full text-[#212121]'} pt-8 pl-20 pr-20 max-sm:p-0 max-md:pt-0 z-50`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button 
                            onClick={toggleMobileMenu} 
                            type="button" 
                            className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`} 
                            aria-controls="mobile-menu" 
                            aria-expanded={showMobileMenu}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                        
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
            
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-12 w-auto max-sm:ml-12" src={dayModeAtomValue ? LimLogoNight : LimLogoDay} alt="Limuel's Logo" />
                        </div>
                        <div className="w-full hidden mt-4 sm:ml-6 sm:block">
                            <div className="flex justify-end items-end w-full space-x-4">
                                <a href="#"  className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300 text-sm font-medium 
														tracking-wider px-3 py-2`} 
														aria-current="page">
														Home
								</a>
                                <a href="#"  className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300 text-sm font-medium 
														tracking-wider px-3 py-2`} >
														About
								</a>
                                <a href="#"  className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300 text-sm font-medium 
														tracking-wider px-3 py-2`} >
														Projects
								</a>
                                <a href="#"  className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300 text-sm font-medium 
														tracking-wider px-3 py-2`} >
														Contact
								</a>
                            </div>
                        </div>
                    </div>
                    {
                        dayModeAtomValue ?
                        <button className='max-sm:m-0 max-sm:mr-2 max-md:mr-2 max-md:m-0 ml-12 mt-4' onClick={() => setDayModeAtomValue(!dayModeAtomValue)} aria-label="Turn On Light Mood">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#E0E0E0" d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
                            </svg>
                        </button>
                        :
                        <button className='max-sm:m-0 max-sm:mr-2 max-md:mr-2 max-md:m-0 ml-12 mt-4' onClick={() => setDayModeAtomValue(!dayModeAtomValue)} aria-label="Turn On Dark Mood">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" transform="rotate(180)">
                                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path>
                            </svg>
                        </button>
                    }
                </div>
            </div>

            {showMobileMenu && (
                <div className="sm:hidden">
                    <div className={`space-y-1 px-2 pb-3 pt-2 ${animateBounce ? 'animate-bounce-once' : ''}`}>
                        <a href="#" className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300
														block px-3 py-2 text-base font-medium`} 
														aria-current="page">
														Home
						</a>
                        <a href="#" className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300
														block px-3 py-2 text-base font-medium`}>
														About
						</a>
                        <a href="#" className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300
														block px-3 py-2 text-base font-medium`}>
														Projects
						</a>
                        <a href="#" className={`relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              											before:bottom-0 before:left-0 ${dayModeAtomValue ? 'before:bg-[#10E956]' : 'before:bg-[#333333]'}
              											before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              											before:transition before:ease-in-out before:duration-300
														block px-3 py-2 text-base font-medium`}>
														Contact
						</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
