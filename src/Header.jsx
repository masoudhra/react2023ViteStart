// conditional rendering
// if - else
// ternary operator

function Header() {
  const isLogin = true;

  return (
    <header>
      {isLogin ? (
        <div>
          <button>Dashboard</button>
          <button>Basket</button>
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}

export default Header;
