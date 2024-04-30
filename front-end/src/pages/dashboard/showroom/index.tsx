import { useAtom } from 'jotai';
import { dayModeAtom } from '../../../atom/day-mode';
import { useState } from 'react'; // Import useState hook
import { Fade } from 'react-swift-reveal';
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

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
          title: "Slide 1",
          imageUrl: "https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          content: "Content of Slide 1",
          link: "https://example.com/link1"
        },
        {
          id: 2,
          title: "Slide 2",
          imageUrl: "https://plus.unsplash.com/premium_photo-1669357657851-f15e1417ea08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          content: "Content of Slide 2",
          link: "https://example.com/link2"
        },
        {
          id: 3,
          title: "Slide 3",
          imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          content: "Content of Slide 3",
          link: "https://example.com/link3"
        },
        {
          id: 4,
          title: "Slide 4",
          imageUrl: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          content: "Content of Slide 4",
          link: "https://example.com/link4"
        },
        {
          id: 5,
          title: "Slide 5",
          imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          content: "Content of Slide 5",
          link: "https://example.com/link5"
        }
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
                    <div className={`relative flex flex-col justify-center items-center min-h-[90dvh] mt-12 p-4 pr-12 pl-12 border ${dayModeAtomValue ? 'border-b-2 border-t-2 border-[#10E956] bg-[#0C8C34]' : 'border-b-2 border-t-2 border-[#333333] bg-[#f7f7f2]'} w-[100%] max-sm:w-full ${dayModeAtomValue ? 'blur-background' : 'blur-background'}`} style={{ backgroundImage: `url('${dummyData[currentSlide].imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='mt-4 mb-4 w-full'>
                            {/* Carousel */}
                            <div className="relative w-full h-full">
                                {/* Carousel wrapper */}
                                <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                                    {dummyData.map((slide, index) => (
                                        <div key={index} className={`carousel-item ${index === currentSlide ? '' : 'hidden'} w-full h-full`}>
                                            <div className="relative w-full h-full flex justify-center items-center">
                                                <div className={`text-white ${dayModeAtomValue ? 'text-green-500' : 'text-gray-300'} font-semibold bg-black bg-opacity-50 p-4 rounded-md`}>
                                                    {slide.content}
                                                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => window.location.href = slide.link}>Click me</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Slider indicators */}
                                <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3 rtl:space-x-reverse z-30">
                                    {dummyData.map((slide, index) => (
                                        <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-400'}`} aria-label={`Slide ${index + 1}`} onClick={() => changeSlide(index)}></button>
                                    ))}
                                </div>
                                {/* Slider controls */}
                                <button type="button" className="absolute top-0 -start-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
                                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 group-hover:bg-white/50 ${dayModeAtomValue ? 'bg-gray-800/30 group-focus:ring-gray-800/70 group-hover:bg-gray-800/60' : null} group-focus:ring-4 group-focus:ring-white group-focus:outline-none`}>
                                        <FaHandPointLeft className='w-6 h-6' />
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button type="button" className="absolute top-0 -end-10 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 group-hover:bg-white/50 ${dayModeAtomValue ? 'bg-gray-800/30 group-focus:ring-gray-800/70 group-hover:bg-gray-800/60' : null} group-focus:ring-4 group-focus:ring-white group-focus:outline-none`}>
                                        <FaHandPointRight className='w-6 h-6' />
                                        <span className="sr-only">Next</span>
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
