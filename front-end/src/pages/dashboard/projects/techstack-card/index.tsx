import { useAtom } from "jotai";
import { dayModeAtom } from "../../../../atom/day-mode";

interface TechStackProps {
	img: string;
    imgName: string;
}

export const TechStack: React.FC<TechStackProps> = ({ img, imgName }) => {
    const [dayModeAtomValue] = useAtom(dayModeAtom);
    
      return (
        <>
            <div className={`${dayModeAtomValue ? 'bg-[#021709]' : 'bg-[#f7f7f2] border-2 border-[#333333]'} rounded-md p-6 flex justify-center items-center text-center gap-2 max-sm:pl-10 max-sm:pr-10`}>
                <img className='w-12 h-12' src={img} alt={imgName} />
                <span className='font-medium tracking-wider'>{imgName}</span>
            </div>
        </>
  );
};