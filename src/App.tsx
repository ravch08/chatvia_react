import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./components/utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
