import "./App.css";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import PrivateRoute from "./wrapper/PrivateRoute";
import Home from "./Pages/Home/Home"; // ← make sure you import Home
import AxamineLogin from "./auth/Axamine"; // Import the Axamine component
import { HomeAbout } from "./Pages/pageIndex";
import DocHome from "./Pages/Doctor/Home/DocHome";
import Chatbot from "./Pages/Chatbot/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/axamine" element={<AxamineLogin />} />
        <Route
          path="/"
          element={
            
              <Home />
            
          }
        />
                <Route
          path="/doctorhome"
          element={
            <PrivateRoute>
              <DocHome />
            </PrivateRoute>
          }
        />
                        <Route
          path="/chatbot"
          element={
            <PrivateRoute>
              <Chatbot />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
