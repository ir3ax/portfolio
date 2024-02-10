import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useAtomValue } from 'jotai'
import { dayModeAtom } from './atom/day-mode'

function App() {

  const dayModeAtomValue = useAtomValue(dayModeAtom);

  return (
    <>
      <div className={`text-20px font-sans ${dayModeAtomValue ? 'transition-colors duration-1000 bg-[#212121] h-[200vh] w-full text-gray-300' : 'transition-colors duration-1000 bg-[#f7f7f2] h-[200vh] w-full text-[#212121]'}`}>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
