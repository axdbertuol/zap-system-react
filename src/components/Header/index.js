import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => history.push("/")}>
          ZAP SYSTEM
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => history.push("/")}>Dashboard</Nav.Link>
          <Nav.Link onClick={() => history.push("/messages")}>
            Mensagens
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
