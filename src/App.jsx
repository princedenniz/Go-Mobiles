import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StartUp from './StartupPage/StartUp';
import NavPage from './NavPage/NavPage';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Sub from './Subscription/Sub';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<StartUp/>}></Route>
      <Route path='/NavPage' element={<NavPage/>}></Route>
      <Route path='/Body' element={<Body/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
      <Route path='/Sub' element={<Sub/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
