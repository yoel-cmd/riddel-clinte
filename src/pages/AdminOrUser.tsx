import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function AdminOrUser() {
  const navigate = useNavigate();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); 
      return;
    }
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setRole(payload.role);
    } catch (err) {
      console.error("❌ Failed to decode token:", err);
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1>Admin or User</h1>

    
      <button onClick={() => navigate("/showRiddles")}>Start game</button>
      <button onClick={() => navigate("/leaderboard")}>Leaderboard</button>

      
      {role === "admin" && (
        <button onClick={() => navigate("/crud")}>CRUD</button>
      )}
    </div>
  );
}

