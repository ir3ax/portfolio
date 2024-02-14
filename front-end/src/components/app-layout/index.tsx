import { Outlet } from "react-router-dom";
import { TopBar } from "./topbar";
import AnimatedCursor from "react-animated-cursor"
import { useAtomValue } from "jotai";
import { dayModeAtom } from "../../atom/day-mode";

export const AppLayout = () => {
	const dayModeAtomValue = useAtomValue(dayModeAtom);
	
	return (
		<>
			<AnimatedCursor
				innerSize={10}
				outerSize={35}
				innerScale={1}
				outerScale={1.7}
				outerAlpha={0}
				outerStyle={{
					border: `${dayModeAtomValue ? '3px solid #E0E0E0' : '3px solid #7410F7'}`
				}}
				innerStyle={{
					backgroundColor: `${dayModeAtomValue ? '#E0E0E0' : '#212121'}`
				}}
			/>
           <div className='flex flex-col w-full min-h-full bg-background'>
			<div className='z-50 sticky top-0'>
				<TopBar />
			</div>
				<div className='flex-grow relative z-0'>
					<Outlet />
				</div>
			</div>
		</>
	);
}