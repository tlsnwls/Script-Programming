import './App.css';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Location from './components/Map';
import MyMenu from './components/MyMenu';
import SignUp from './components/Signup';
import Coffee from './components/Coffee';
import NonCoffee from './components/NonCoffee';
import Foods from './components/Foods';

function App() {

  return (
    <Router>
      <div>
        <Navbar className = "NavBarStyle" style={{ backgroundColor: 'brown' }} variant="dark">
          <Container>
            <Nav className="me-auto">
              <Link to="/" className="navbar-brand">Grazie</Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item as = {Link} to = '/coffee'>Coffee</NavDropdown.Item>
                <NavDropdown.Item as = {Link} to = '/non-coffee'>Non-Cofeee</NavDropdown.Item>
                <NavDropdown.Item as = {Link} to = '/foods'>Foods</NavDropdown.Item>
              </NavDropdown>
              <Link to="/map" className="nav-link">Map</Link>
              <Link to="/mymenu" className="nav-link">MyMenu</Link>
              <Link to="/signup" className="nav-link">SignUp</Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/non-coffee" element={<NonCoffee />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/map" element={<Location />} />
          <Route path="/mymenu" element={<MyMenu />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <div className='wrap'>
        <footer className='footer'>
          <nav onClick={scrollToTop}>
            <Link to = "/map" style={{color : 'ivory'}}>Graize Location</Link>
            <br/>
            <Link to = "/coffee" style={{color : 'ivory'}}> Cofeee</Link>
            <p style={{fontSize : '15px', position : 'absolute', bottom : '0', color: 'ivory'}}>
              경기도 포천시 호국로 1007</p>
          </nav>
        </footer>
      </div>
    </Router>
    
  );
}

// footer에서 링크 클릭 시 화면 고정 방지(화면 창 맨 위로 가짐) 
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}
export default App;
