import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
