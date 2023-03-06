import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Texto from './components/Texto'


const App =() => {
  return (
    <div className='App'>
    <div>
      <Texto nombre= "Juan"><div>Hola</div></Texto>
    </div>
    </div>
  )
}

export default App
