import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Mode from './components/mode'
import Badboy from './components/Badboy'
import Clickboard from './components/Clickboard'
import Focus from './components/Focus'
import Keyboard from './components/Keyboard'
import DateAndTime from './components/DateAndTime'
import SubmitDetails from './components/SubmitDetails'
import Expression from './components/Expression'
import Error from './components/Error'
import Form from './components/Form'
import { BrowserRouter, Routes, Route, } from "react-router";

function App() {
  const [NameId, setNameId] = useState("Rakibul Alam Tanveen")
  const ChangeName=()=>{
    setNameId("Estiak Ahamed")
  }

  return (
    <>
    <p>Hi my name is {NameId}</p>
    <button className='btn btn-primary' onClick={ChangeName}>Click Me To Change</button>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/mode' element={<Mode/>}></Route>
          <Route path='/DateAndTime' element={<DateAndTime/>}></Route>
          <Route path='/Badboy' element={<Badboy/>}></Route>
          <Route path='/Clickboard' element={<Clickboard/>}></Route>
          <Route path='/Focus' element={<Focus/>}></Route>
          <Route path='/Keyboard' element={<Keyboard/>}></Route>
          <Route path='/SubmitDetails' element={<SubmitDetails/>}></Route>
          <Route path='/Expression' element={<Expression/>}></Route>
          <Route path='/Form' element={<Form/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
