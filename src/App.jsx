// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import HotPage from './pages/hotPage/HotPage';
import { RecentPage } from './pages/recentPage/RecentPage';
import UserPage from './pages/userPage/UserPage';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
          
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <HotPage/> */}
      {/* <RecentPage/> */}
      <UserPage/>
    </div>
  );
}

export default App;
