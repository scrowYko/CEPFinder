import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cep from "./components/PesquisaCEP";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Cep />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
