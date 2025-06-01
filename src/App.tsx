import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Send, ArrowForward } from '@mui/icons-material';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';
import viteLogo from '/vite.svg'
import Button from './components/Button/index'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      // As a regular button
<Button variant="primary" onClick={() => console.log('Clicked')}>
  Click Me
</Button>

// As a link
<Button as="a" href="/contact" variant="secondary">
  Contact Us
</Button>

// Nav button with active state
<Button variant="nav" isNavActive={true}>
  Home
</Button>

// Icon on left (default)
<Button icon={<Send />}>Send Message</Button>

// Icon on right
<Button 
  variant="secondary"
  icon={<ArrowForward />} 
  iconPosition="right"
>
  Continue
</Button>
// Basic usage
<Button onClick={handleClick}>Submit</Button>

// With responsive full width
<Button 
  fullWidth={{ sm: true, lg: false }}
  variant="secondary"
>
  Responsive Width
</Button>

// With icon
<Button 
  icon={<ArrowIcon />}
  iconPosition="right"
  isNavActive={true}
>
  Navigation
</Button>
    </>
  )
}

export default App
