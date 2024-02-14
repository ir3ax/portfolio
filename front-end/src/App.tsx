import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useAtomValue } from 'jotai'
import { dayModeAtom } from './atom/day-mode'

function App() {

  const dayModeAtomValue = useAtomValue(dayModeAtom);

  return (
    <>
      <div className={`text-20px font-sans ${dayModeAtomValue ? 'transition-all duration-1000 bg-[#050810] h-full w-full text-gray-300 pb-24' : 'transition-all duration-1000 bg-[#f0e5fd] h-full w-full text-[#212121] pb-24'}`}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
