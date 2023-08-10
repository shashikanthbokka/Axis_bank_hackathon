import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Signuphr from "./components/signuphr";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signupoption from "./components/signupoption";
import Profile from "./components/profile";
import Jobdetailsa from "./components/jobdetails-a";
import Jdrounds from "./components/jd-rounds";
import Jobposting from "./components/job-posting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signuphr" element={<Signuphr />} />
        <Route path="/signupoption" element={<Signupoption />} />
      </Routes>
    </>
  );
}

export default App;
