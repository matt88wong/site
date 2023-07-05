//Dependencies
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//Pages
import { Home, Music } from './Pages';

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
          <Route path="about" element={<div>create about page!</div>} />
            <Route path="portfolio" element={<div>create portfolio page!</div>} />
            <Route path="professional" element={<div>create professional page!</div>} />
            <Route path="music" element={<Music/>} />
            <Route path="food" element={<div>create food page!</div>} />
            <Route path="football" element={<div>create football page!</div>} />
        </Routes>
        <Outlet />    
      </BrowserRouter>
    </div>
  );
}

export default App;
