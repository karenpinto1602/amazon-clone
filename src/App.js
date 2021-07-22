
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
function App() {
  return (
    //Using BEM convention
    <div className="app">
      <Header />
      <Home />      
    </div>
  );
}

export default App;
