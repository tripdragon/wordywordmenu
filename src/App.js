import logo from './logo.svg';
import './App.scss';
import './fish.css';


import Builder1 from './Builder1.js';
import Builder2 from './Builder2.js';
import HeaderNav from './headerNav.js';

function App() {
  return (
    
    <div className="App" id="approot">
    
      <HeaderNav />
      {/* <Builder1 /> */}
      <Builder2 />
    </div>
    
);
}

export default App;
