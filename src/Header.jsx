// conditional rendering
// if - else
// ternary operator
// &&

function Header() {
  const isLogin = true;

  return (
    <header>
      {isLogin ? (
        <div>
          <button>Dashboard</button>
          
        </div>
      ) : (
        <button>Login</button>
      )}
      {isLogin && <button>Cart</button>}
    </header>
  );
}

export default Header;
