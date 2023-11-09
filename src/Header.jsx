// conditional rendering
// if - else

function Header() {
  const isLogin = true;

  if (isLogin) {
    return (
      <header>
        <button>Dashbourd</button>
      </header>
    );
  }
  return (
    <header>
      <button>Login</button>
    </header>
  );
}

export default Header;
