import "./App.css";
import "./GNH/header";
import HeaderMenu from "./GNH/header";
import not_found_page from "./not_page_found/error_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}
//nav는 테스트임
export default App;
