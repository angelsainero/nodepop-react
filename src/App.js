import "./App.css";
import AdvertsPage from "./components/adverts/AdvertsPage";
import LoginPage from "./components/auth/LoginPage";
import NewAdvertPage from "./components/adverts/newAdvertPage";
import { Route, Routes, Navigate } from "react-router-dom";
import AdvertPage from "./components/adverts/AdvertPage";
import RequireAuth from "./components/auth/RequireAuth";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="adverts" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/adverts"
          element={
            <RequireAuth>
              <AdvertsPage />
            </RequireAuth>
          }
        />
        ;
        <Route
          path="/adverts/new"
          element={
            <RequireAuth>
              <NewAdvertPage />
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/:id"
          element={
            <RequireAuth>
              <AdvertPage />
            </RequireAuth>
          }
        />
        <Route path="/404" element={<div>404 || not found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
