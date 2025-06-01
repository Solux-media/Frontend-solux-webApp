// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import { Send, ArrowForward } from '@mui/icons-material';
// import { ArrowForward as ArrowIcon } from '@mui/icons-material';
// import viteLogo from '/vite.svg'
import Button from './components/Button/index'
// import React from 'react';
import Block from './components/Block';
import { BlockText, BlockImage, BlockLine } from './components/BlockContent';
import './App.css'


function App() {
//   const [count, setCount] = useState(0)
//   const handleClick = () => {
//     console.log('Button clicked');
//   };

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       // As a regular button
// <Button variant="primary" onClick={() => console.log('Clicked')}>
//   Click Me
// </Button>

// // As a link
// <Button as="a" href="/contact" variant="secondary">
//   Contact Us
// </Button>

// // Nav button with active state
// <Button variant="nav" isNavActive={true}>
//   Home
// </Button>

// // Icon on left (default)
// <Button icon={<Send />}>Send Message</Button>

// // Icon on right
// <Button 
//   variant="secondary"
//   icon={<ArrowForward />} 
//   iconPosition="right"
// >
//   Continue
// </Button>
// // Basic usage
// <Button onClick={handleClick}>Submit</Button>

// // With responsive full width
// <Button 
//   fullWidth={{ sm: true, lg: false }}
//   variant="secondary"
// >
//   Responsive Width
// </Button>

// // With icon
// <Button 
//   icon={<ArrowIcon />}
//   iconPosition="right"
//   isNavActive={true}
// >
//   Navigation
// </Button>


//     </>
//   )


  return (
    <>
      {/* Simple block with text */}
      <Block
        width={300}
        height={200}
        top={50}
        left={50}
        backgroundColor="#57BCE1"
        borderRadius={20}
        shadow="0 3px 30px rgba(0,0,0,0.16)"
        responsive
        sm="position-relative"
        md="position-absolute"
      >
        <BlockText 
          as="h2" 
          style={{ padding: 20, color: 'white' }}
          responsive
          sm="left"
          md="center"
        >
          Welcome
        </BlockText>
      </Block>

      {/* Complex block with multiple elements */}
      <Block
        width={{ xs: '100%', sm: '80%', md: 600 }}
        height="auto"
        top={300}
        left="50%"
        gradient={{ colors: ['#57BCE1', '#171F60'] }}
        borderRadius={30}
        padding={20}
        responsive
        sm="position-static"
        md="position-absolute"
        style={{ transform: 'translateX(-50%)' }}
      >
        <BlockImage 
          src="/path/to/image.jpg" 
          alt="Feature" 
          height={200}
          rounded
          responsive
          sm="fluid"
          md="cover"
          style={{ borderRadius: '20px 20px 0 0' }}
        />
        
        <BlockLine 
          color="rgba(255,255,255,0.5)" 
          thickness="2px"
          responsive
          sm="hidden"
          md="visible"
          style={{ margin: '15px 0' }}
        />
        
        <BlockText 
          as="h3" 
          style={{ color: 'white', marginBottom: 10 }}
          responsive
          sm="left"
          md="center"
        >
          Featured Product
        </BlockText>
        
        <BlockText 
          style={{ color: 'white', marginBottom: 15 }}
          responsive
          sm="left"
          md="center"
        >
          Discover our latest innovation
        </BlockText>
        
        <div className="d-flex justify-content-center">
          <Button variant="light">Learn More</Button>
        </div>
      </Block>
    </>
  );
};

export default App
