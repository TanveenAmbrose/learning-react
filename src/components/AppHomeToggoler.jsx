import React , {useState} from 'react'
import Navbar from './Navbar';

function AppHomeToggoler() {
    const [Toggoler, setToggoler]=useState(true);
  return (
    <>
    <Navbar/>
    <button className='btn btn-success' onClick={()=>{setToggoler(!Toggoler)}}>{Toggoler ? "Hide This Shit":"Show It MF"}</button>
    {Toggoler &&
    <p>Hi MotherFucker Fuck You Bitch</p>}
    </>
  )
}

export default AppHomeToggoler
