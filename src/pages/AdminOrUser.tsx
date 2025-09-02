import { useNavigate } from "react-router";

export default function AdminOrUser() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Admin or User</h1>
      <button onClick={()=>{navigate("/showRiddles")}}>start game</button>
      <button onClick={()=>{navigate("/leaderboard")}} >Leaderboard</button>
      <button onClick={()=>{navigate("/create")}} >CRUD</button>

      {/* פה לפי האישורים שלו יופיעו כפתורים שמובילים ל CRUD */}
    </div>
  );
}
