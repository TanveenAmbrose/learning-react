import { useState } from 'react'
import Navbar from './components/Navbar'
import Mode from './components/mode'
import Badboy from './components/Badboy'
import Clickboard from './components/Clickboard'
import Focus from './components/Focus'
import Keyboard from './components/Keyboard'
import DateAndTime from './components/DateAndTime'
import SubmitDetails from './components/SubmitDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SubmitDetails/>
      {/* <Navbar/>
      <Mode/>
      <Badboy/>
      <Clickboard/>
      <Focus/>
      <Keyboard/>
      <DateAndTime/> */}
      
    </>
  )
}

export default App
