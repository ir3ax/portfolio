import { Outlet } from "react-router-dom";

export const AppLayout = () => {
	
	return (
		<>
           <div className='flex flex-col w-full min-h-full bg-background'>
				<div className='flex-grow'>
				<Outlet />
				</div>
			</div>
		</>
	);
}