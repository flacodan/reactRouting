import logo from '../../images/dm_white_logo.png';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <div>
        <img src={logo} alt="dm logo" />
      </div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/topics'>Topics</Link>
      </ul>
    </div>
  );
}
