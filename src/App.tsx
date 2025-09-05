import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./assets/pages/homePage";
import { LoginPage } from "./assets/pages/loginPage";
import { useAtomValue } from "jotai";
import { IsLoggedIn} from "./assets/pages/Atoms";
import type { AuthProps } from "./assets/ui/interface/Interfaces";
import ProtectedRoute from "./assets/context/protectedRoute";
import { AuthContext } from "./assets/context/AuthContext";
import { SharedPage } from "./assets/pages/sharedPage";

const AuthCheck = ({children}: AuthProps) => {
  const isLoggedIn = useAtomValue(IsLoggedIn)
  return isLoggedIn ? <Navigate to="/"/> : children
}

const App = () => {
  AuthContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}></Route>
        <Route path="/login" element={<AuthCheck><LoginPage /></AuthCheck>}></Route>
        <Route path="/brain/share/:BrainId" element={<SharedPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
