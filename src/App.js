import "./App.css";
import { SignupPage } from "../src/Auth/SignupPage";
import PassForget from "../src/Auth/PassForget";
import LoginPage from "../src/Auth/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Auth/SignupPage" element={<SignupPage />} />
          <Route path="/Auth/PassForget" element={<PassForget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
