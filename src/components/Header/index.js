import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/modules/auth/actions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated && user) {
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
          <div
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Navbar.Text style={{ justifySelf: "center" }} color="secondary">
              {user.email}
            </Navbar.Text>
            <Nav.Link
              style={{ color: "white", justifySelf: "end" }}
              onClick={() => dispatch(logout())}
            >
              Sair
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    );
  } else {
    return null;
  }
};

export default Header;
