//Content
import TextResources from './Content/TextResources.json';

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
          <Route path={TextResources.pageLinks.portfolio.pageLink} element={<div>create portfolio page!</div>} />
          <Route path={TextResources.pageLinks.coolStuff.pageLink} element={<CoolStuff />} />
        </Routes>
        <Outlet />    
      </BrowserRouter>
    </div>
  );
}

export default App;
