import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Bootcamp from './components/Pages/Bootcamp'
import BootcampOverview from './components/SubPages/BootcampOverview'
import Workshop from "./components/Pages/Workshop"
import WorkshopOverview from "./components/SubPages/WorkshopOverview"
import Liveclass from "./components/Pages/Liveclass"
import RecordedOverview from "./components/SubPages/RecordedOverview"
import Webinar from "./components/Pages/Webinar"
import WebinarOverview from "./components/SubPages/WebinarOverview"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Events/Bootcamp' element={<Bootcamp />}/>
        <Route path='/Events/Bootcamp/Overview' element={<BootcampOverview />}/>
        <Route path='/Events/Workshop' element={<Workshop />}/>
        <Route path='/Events/Workshop/Overview' element={<WorkshopOverview />}/>
        <Route path='/Events/Liveclass' element={<Liveclass />}/>
        <Route path='/Events/Liveclass/RecordedOverview' element={<RecordedOverview />}/>
        <Route path='/Events/Webinar' element={<Webinar />}/>
        <Route path='/Events/Webinar/Overview' element={<WebinarOverview />} /> 
  
      </Routes>
    </BrowserRouter>
  )
}

export default App
