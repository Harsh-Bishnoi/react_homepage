import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import EventPage from './view/EventPage'
import BackToTop from './components/common/BackToTop'

function App() {

  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={ <EventPage/>} />
        </Routes>
      </BrowserRouter>
      <BackToTop/>
    </>
  )
}

export default App
