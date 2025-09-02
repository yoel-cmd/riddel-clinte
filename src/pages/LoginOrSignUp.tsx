import { useNavigate } from "react-router";

export default function LoginOrSignUp() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login or Sign Up</h1>
      <button onClick={() => {navigate("/adminoruser")}}>Login</button>
      <button onClick={() => {navigate("/adminoruser")}}>Sign Up</button>
    </div>
  );
}
