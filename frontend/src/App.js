import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./component/NavBar";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Services from "./component/Pages/Services";
import Contac from "./component/Pages/Contac";

function App(){
  return (
      <>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contac />} />
              </Routes>
          </BrowserRouter>
      </>

  )
}

export default App;