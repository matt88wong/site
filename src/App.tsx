import { Home, Music } from './Pages';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
