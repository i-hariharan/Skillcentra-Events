import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Bootcamp from './Pages/Bootcamp'
import BootcampOverview from './SubPages/BootcampOverview'
import Workshop from "./Pages/Workshop"
import WorkshopOverview from "./SubPages/WorkshopOverview"
import Liveclass from "./Pages/Liveclass"
import RecordedOverview from "./SubPages/RecordedOverview"
import Webinar from "./Pages/Webinar"
import WebinarOverview from "./SubPages/WebinarOverview"

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
