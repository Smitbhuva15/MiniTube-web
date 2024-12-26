
// import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar'

function App() {


  return (
   <>
    <NavBar />
    <Outlet />
   </>
     
   
  )
}

export default App
