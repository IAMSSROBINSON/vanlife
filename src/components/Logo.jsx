import { Link } from 'react-router-dom';

export default function Logo () {
    return (
        <div className="logo-container">
            <Link to="/" className="logo-type link">#VANLIFE</Link>
        </div>
    )
}