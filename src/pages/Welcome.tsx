import { useNavigate } from "react-router";

export default function Welcome() {
    const navigate=useNavigate()
  return (
    <div>
      <h1>Welcome to the Riddle App!</h1>
      <button onClick={()=>{navigate("/login")}}>Login</button>
      <button onClick={()=>{navigate("/login")}}>Sign Up</button>
      <button onClick={()=>{navigate("/showRiddles")}}>gest</button>
     
    </div>
  );
}
