import {useNavigate} from "react-router";
export default function CRUD() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CRUD Operations</h1>
      <button onClick={() => {navigate("/create")}}>create</button>
      <button onClick={() => {navigate("/showRiddles")}}>read</button>
      <button onClick={() => {navigate("/update")}}>update</button>
      <button onClick={() => {navigate("/delete")}}>delete</button>
    </div>
  );
}
