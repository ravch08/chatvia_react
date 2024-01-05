import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, Page404, Register } from "./components/utils/helper";

import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={!currentUser ? <Navigate to="/login" /> : <Home />}
          />
          <Route
            path="/register"
            element={currentUser ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/" /> : <Login />}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
