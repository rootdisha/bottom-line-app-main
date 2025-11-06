import { FC } from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

export const Allrouters = () => {
  return (
    <div>
        <Nav />
        <div className="pt-16">
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
    </div>
  )
}
