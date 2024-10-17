import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Services from "./component/Pages/Services";
import Contac from "./component/Pages/Contac";
import Login from "./component/auth/Login";
import Registration from "./component/auth/Registration";

function App(){
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/services" element={<Services/>}/>
                  <Route path="/contact" element={<Contac/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Registration/>}/>


              </Routes>
          </BrowserRouter>
      </>

  )
}

export default App;