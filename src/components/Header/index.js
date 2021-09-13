// const Qtd = () => {
//   const history = useHistory();

//   const quantity = useSelector((state) => state.cart.items.length);

//   return (
//     <span onClick={() => history.push('/cart')}>{quantity} produtos</span>
//   );
// }
// import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const history = useHistory();

  return (
    <header className="header-container">
      <div className="container header-content">
        <span>ZAP SYSTEM</span>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/messages">Messages</NavLink>
      </div>
    </header>
  );
};

export default Header;
