import './App.css';
import Paths from './Paths';
import Navigation from './Navigation'

function App() {

  return (
    <>
      <div className='Container'>
        <div className='Navigation'>
          <Navigation/>
        </div>
        <div className='Paths'>
          <Paths />
        </div>
      </div>
    </>
  )
}

export default App
