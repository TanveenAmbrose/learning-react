import { useState } from 'react'
import Navbar from './components/Navbar'
import Mode from './components/mode'
import Badboy from './components/Badboy'
import Clickboard from './components/Clickboard'
import Focus from './components/Focus'
import Keyboard from './components/Keyboard'
import DateAndTime from './components/DateAndTime'
import SubmitDetails from './components/SubmitDetails'
import Expression from './components/Expression'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <SubmitDetails/> */}
      {/* <Navbar/>
      <Mode/>
      <Badboy/>
      <Clickboard/>
      <Focus/>
      <Keyboard/>
      <DateAndTime/> */}
      {/* <Expression/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/mode' element={<Mode/>}></Route>
          <Route path='/DateAndTime' element={<DateAndTime/>}></Route>
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
