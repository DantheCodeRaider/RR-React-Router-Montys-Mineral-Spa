import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

function App() {

  const packages = ['Activate your Crystals', 
  'Monkey Meditation', 
  'Soak in the Hotsprings', 
  'Hypnotherapy', 
  'Mineral Bath']
  
    return (
      <div className="App">
        <Router>
            <h1 className="title">Welcome to Monty's Mineral SPA</h1>
            <Container>
              <Nav defaultActiveKey="/" variant="tabs" fill>
                <Nav.Item>
                    <Nav.Link eventKey={"homePage"} href="/"> 
                      <Link to="/">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={"aboutPage"} href="/about"> 
                      <Link to="/about">About Us</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={"packagesPage"} href="/packages"> 
                      <Link to="/packages">Our Packages</Link> 
                    </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>

        <div className="display">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages packages={packages}/>} />
            </Routes>
        </div>
        
        
        </Router>
      </div>
    );
}
  
  export default App;
  

