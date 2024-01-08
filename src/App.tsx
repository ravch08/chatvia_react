import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  Home,
  Login,
  Page404,
  Register,
  SidebarChats,
  SidebarProfile,
  SidebarSetting,
} from "./components/utils/helper";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!currentUser ? <Navigate to="/login" /> : <Home />}
        >
          <Route index element={<SidebarProfile />} />
          <Route path="chats" element={<SidebarChats />} />
          <Route path="settings" element={<SidebarSetting />} />
        </Route>

        <Route
          path="register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
