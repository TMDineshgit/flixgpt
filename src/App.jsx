
import { Routes, Route, Navigate } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import Header from "./components/Header"


import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
    <Header />
    <Routes>

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/browse" element={<Browse />} />
      </Route>

      {/* Default route */}
      <Route path="/" element={<Navigate to="/browse" replace />} />

      <Route path="*" element={<Navigate to="/browse" replace />} />

    </Routes>
    </>
  );
};

export default App;
