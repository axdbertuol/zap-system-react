// const Qtd = () => {
//   const history = useHistory();

//   const quantity = useSelector((state) => state.cart.items.length);

//   return (
//     <span onClick={() => history.push('/cart')}>{quantity} produtos</span>
//   );
// }

const Header = () => {
  return (
    <header className="header-container">
      <div className="container header-content">
        <span>Zap SYSTEM</span>
        {/* <Qtd /> */}
      </div>
    </header>
  );
};

export default Header;
