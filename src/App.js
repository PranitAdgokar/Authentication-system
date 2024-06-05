import "./App.css";
import {SignupPage} from "./components/SignupPage";
import PassForget from "./components/PassForget";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/SignupPage" element={<SignupPage/>}/>
          <Route path="/PassForget" element={<PassForget/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
