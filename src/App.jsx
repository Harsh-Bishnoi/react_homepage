import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import EventPage from './view/EventPage'
import BackToTop from './components/common/BackToTop'
import PageNotFound from './components/common/PageNotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<EventPage />} />
          <Route path='/feed' element={<PageNotFound />} />
          <Route path='/festival' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </>
  )
}

export default App
