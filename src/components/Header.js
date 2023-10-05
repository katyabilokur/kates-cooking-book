function Header({ dispatch }) {
  return (
    <header className="app-header">
      <img
        className="app-header-img"
        onClick={() => dispatch({ type: "reload" })}
        src="icon512.png"
        alt="Cooking logo"
      />
      <h1 className="flex-header">
        <span>Kate's</span>
        <span>cooking book</span>
      </h1>
    </header>
  );
}

export default Header;
