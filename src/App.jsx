import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}
