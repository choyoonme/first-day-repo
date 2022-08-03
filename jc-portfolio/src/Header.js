function Header({ children }) {
  return (
    <div>
      <div className="header">
        <p className="nav">
          <a href="#aboutme">about me</a>
        </p>
        <p className="nav">
          <a href="#work">work</a>
        </p>
        <p className="nav">
          <a href="#contact">contact</a>
        </p>
        {children}
      </div>
    </div>
  );
}

export default Header;
