import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { DashboardPage } from "./pages/DashboardPage";
import { ProtectedLogin } from "./components/ProtectedLogin";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Routes>
          <Route element={<ProtectedLogin/>}>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
          </Route>
          <Route path="*" element={<h1>404</h1>}/>
          <Route path="/dashboard" element={<ProtectedRoutes/>}>
            <Route index element={<DashboardPage/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
