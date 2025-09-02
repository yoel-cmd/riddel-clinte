import { useNavigate } from "react-router";

export default function LoginOrSignUp() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login or Sign Up</h1>
      <input type="text" value={"enter username"} />
      <input type="password" value={"enter password"} />
      <button onClick={() => {navigate("/adminoruser")}}>Login</button>
      <button onClick={() => {navigate("/adminoruser")}}>Sign Up</button>
    </div>
  );
}
