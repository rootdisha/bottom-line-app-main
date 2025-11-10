import { FC } from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

// Solution Pages
import HCI from '../Pages/HCI'
import Networking from '../Pages/Networking'
import DataCentre from '../Pages/DataCentre'

// Service Pages
import DataStorage from '../Pages/DataStorage'
import ServerInfrastructure from '../Pages/ServerInfrastructure'
import DisasterRecovery from '../Pages/DisasterRecovery'
import Virtualization from '../Pages/Virtualization'
import BackupDR from '../Pages/BackupDR'
import Migration from '../Pages/Migration'
import Mobility from '../Pages/Mobility'
import Security from '../Pages/Security'

// Other Pages
import About from '../Pages/About'
import Portfolio from '../Pages/Portfolio'
import Contact from '../Pages/Contact'

export const Allrouters = () => {
  return (
    <div>
        <Nav />
        <div className="pt-16">
          <Routes>
              <Route path='/' element={<Home />} />

              {/* Solution Routes */}
              <Route path='/solutions/hci' element={<HCI />} />
              <Route path='/solutions/networking' element={<Networking />} />
              <Route path='/solutions/data-centre' element={<DataCentre />} />

              {/* Service Routes */}
              <Route path='/services/storage' element={<DataStorage />} />
              <Route path='/services/server' element={<ServerInfrastructure />} />
              <Route path='/services/disaster-recovery' element={<DisasterRecovery />} />
              <Route path='/services/virtualization' element={<Virtualization />} />
              <Route path='/services/backup' element={<BackupDR />} />
              <Route path='/services/migration' element={<Migration />} />
              <Route path='/services/mobility' element={<Mobility />} />
              <Route path='/services/security' element={<Security />} />

              {/* Other Routes */}
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
    </div>
  )
}
