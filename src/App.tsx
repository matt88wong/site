//Content
import TextResources from './Content/TextResources.json';

//Dependencies
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//Pages
import { Blog, Home, Portfolio } from './Pages';

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
          <Route path="*" element={<Home />} />
          <Route path={TextResources.pageLinks.portfolio.pageLink} element={<Portfolio/>} />
          <Route path={TextResources.pageLinks.blog.pageLink} element={<Blog />} />
        </Routes>
        <Outlet />    
      </BrowserRouter>
    </div>
  );
}

export default App;
