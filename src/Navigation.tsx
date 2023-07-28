import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li className='header'> <Link to="/">Home</Link> </li>
        <li className='header'> <Link to="/welcome">Welcome</Link></li>
        <li className='header'> <Link to="/ldamallet">LDA Mallet</Link></li>
        <li className='header'> <Link to="/bertopic">BERTopic</Link> </li>
        <li className='header'> <Link to="/data">Data</Link> </li>
      </ul>
    </nav>
  );
}

export default Navigation;