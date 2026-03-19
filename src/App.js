import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import Homescreen from './Screen/HomeScreen/homeScreen';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Homescreen/>
    </div>
  );
}

export default App;
