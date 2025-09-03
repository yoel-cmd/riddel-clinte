import { useRef } from "react";
// import { insertTokenToLS } from "../util/LocalStorage.ts";
import { useNavigate } from "react-router";
import { Auth } from "../util/Auth.ts";


export default function LoginOrSignUp() {
  const navigate = useNavigate();
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <h1>Login or Sign Up</h1>
      <input type="text" placeholder="enter username" ref={userNameRef} />
      <input type="password" placeholder="enter password" ref={passwordRef} />

      <button
        onClick={async (e) => {e.preventDefault();
        const role=await Auth("siging","User created",userNameRef.current?.value,passwordRef.current?.value)
        if(role.role==="admin"||"user"){
          navigate("/adminoruser")
        }
        }}>Sign Up
      </button>

      <button
        onClick={async (e) => {e.preventDefault();
         const role=await Auth("login","Login successful",userNameRef.current?.value,passwordRef.current?.value)
          if(role.role==="admin"||"user"){
          navigate("/adminoruser")
        }
        }}>Login
      </button>
    </div>
  );
}
