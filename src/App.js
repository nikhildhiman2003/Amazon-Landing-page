import './App.css';
import Navbar from './component/navbar/navbar'; 
import HomepageScreen from './homepage/homepage-screen';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HomepageScreen/>      
    </div>
  )
}

export default App;
