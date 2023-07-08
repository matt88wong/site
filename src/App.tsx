//Dependencies
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//Pages
import { CoolStuff, Home } from './Pages';

//Features
import { Navbar } from './Features';

//Style
import './css/app.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<div>create portfolio page!</div>} />
          <Route path="coolstuff" element={<CoolStuff />} />
        </Routes>
        <Outlet />    
      </BrowserRouter>
    </div>
  );
}

export default App;
