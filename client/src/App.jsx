import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Videos from "./components/Videos";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} exact>
        <Route path="/" element={<Videos />} index />
        <Route path="test" element={<h1>hey there</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
