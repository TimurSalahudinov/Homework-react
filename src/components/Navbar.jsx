import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
function MyNavbar() {
  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Реактивная тяга. Навбар готов
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;