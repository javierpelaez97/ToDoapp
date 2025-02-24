
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Navegador from './components/navegador'
import Home from './pages/home'
import Tareas from './pages/tareas';
import Login from './pages/login';
import Register from './pages/register';

function App() {


  return (
    <>
      <header>
        <Navegador></Navegador>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/misTareas' element={<Tareas></Tareas>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>

      
        
      </main>
    </>
  )
}

export default App
