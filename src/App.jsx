import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from '/src/components/Home';
import About from '/src/components/About';

export default function App () {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
 
   </Routes>
   </BrowserRouter>
  )
}