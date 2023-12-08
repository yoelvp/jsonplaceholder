import { Route, Routes } from 'react-router-dom'

import Homepage from '@/pages/home/Home'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/albums' element={<Homepage />} />
    </Routes>
  )
}

export default Routing
