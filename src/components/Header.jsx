import { Link } from 'react-router-dom';
import Logo from './Logo';
import About from './About';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="navbar">
        <Link to="/about" element={<About/>} className="about-link link">
          About
        </Link>
        <Link to="/vans" element={<></>} className="vans-link link">
          Vans
        </Link>
      </nav>
    </header>
  );
}
