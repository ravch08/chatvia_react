import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Page404, Register } from "./components/utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
