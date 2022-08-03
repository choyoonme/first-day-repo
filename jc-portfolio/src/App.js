import { useState } from "react";
import Header from "./Header";
import "./App.css";

function App({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="innerApp">
        <Header>
          <label className="switch">
            <i className="fa-regular fa-moon"></i>
            <div>
              <input
                onClick={() => setIsDarkMode(!isDarkMode)}
                type="checkbox"
                id="toggle"
              />
              <span className="slider round"></span>
            </div>
          </label>
        </Header>

        {children}
      </div>
    </div>
  );
}

export default App;
