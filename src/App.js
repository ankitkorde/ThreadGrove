import logo from './logo.svg';
import './App.css';

import HomePage from './customer/Pages/HomePage/HomePage';
import Navigation from './customer/component/Navigation/Navigation';

function App() {
  return (
    <div className="">
    <Navigation/>
    <div>
      <HomePage/>
    </div>
    </div>
  );
}

export default App;
