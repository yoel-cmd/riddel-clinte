// import { useNavigate } from "react-router";
// import { loadLS } from "../util/LocalStorage.ts";
// import { useEffect } from "react";

// useEffect(()=>{
//   async function load(){
//     const token=await loadLS("token")
//   }
//   load()
// },[])


// export default function AdminOrUser() {
//     const navigate = useNavigate();
//   return (
//     <div>
//       <h1>Admin or User</h1>
//       <button onClick={()=>{navigate("/showRiddles")}}>start game</button>
//       <button onClick={()=>{navigate("/leaderboard")}} >Leaderboard</button>
//       <button onClick={()=>{navigate("/crud")}} >CRUD</button>

//       {/* פה לפי האישורים שלו יופיעו כפתורים שמובילים ל CRUD */}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function AdminOrUser() {
  const navigate = useNavigate();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // אין טוקן? חזרה לדף לוגין
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

      {/* מותר לכולם */}
      <button onClick={() => navigate("/showRiddles")}>Start game</button>
      <button onClick={() => navigate("/leaderboard")}>Leaderboard</button>

      {/* רק לאדמין */}
      {role === "admin" && (
        <button onClick={() => navigate("/crud")}>CRUD</button>
      )}
    </div>
  );
}

