import "./App.css";
import "./GNH/header";
import HeaderMenu from "./GNH/header";
import Navbar from "./GNN/nav";

function App() {
  return (
    <div>
      <HeaderMenu></HeaderMenu>
      {/* <nav className="navbar">
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        ></button>
        <ul></ul>
      </nav> */}
    </div>
  );
}
//nav는 테스트임
export default App;
