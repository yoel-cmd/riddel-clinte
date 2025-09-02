import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "./pages/Welcome";
import ShowRiddles from "./pages/ShowRiddles";
import Leaderboard from "./pages/Leaderboard.";
import FinishGame from "./pages/FinishGame";
import DeleteRiddle from "./pages/DeleteRiddle";
import UpdateRiddle from "./pages/UpdateRiddle";
import ReadRiddles from "./pages/ReadRiddles";
import CreateRiddle from "./pages/CreateRiddle";
import AdminOrUser from "./pages/AdminOrUser";
import LoginOrSignUp from "./pages/LoginOrSignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create" element={<CreateRiddle />} />
          <Route path="/read" element={<ReadRiddles />} />
          <Route path="/update" element={<UpdateRiddle />} />
          <Route path="/delete" element={<DeleteRiddle />} />
          <Route path="/finish" element={<FinishGame />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/showRiddles" element={<ShowRiddles />} />
          <Route path="/adminoruser" element={<AdminOrUser />} />
          <Route path="/login" element={<LoginOrSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
