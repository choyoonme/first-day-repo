import "./App.css";

function Header() {
  return (
    <div>
      <div className="App">
        <p className="nav">
          <a href="#aboutme">about me</a>
        </p>
        <p className="nav">
          <a href="#work">work</a>
        </p>
        <p className="nav">
          <a href="#contact">contact</a>
        </p>
        <label className="switch">
          <i className="fa-regular fa-moon"></i>
          <div>
            <input type="checkbox" id="toggle" />
            <span className="slider round"></span>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Header;
