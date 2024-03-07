import './App.css';
import Header from './components/Header';
import Navbar from './pages/Navbar';
import Router from './router';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
