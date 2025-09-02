import { useNavigate } from "react-router";

export default function ShowRiddles() {
  const navigate = useNavigate();

  return (
    <div>
      <h1> Riddles </h1>
      <form action="">
        <p>riddle: 5+5</p>
        
        <input type="text" placeholder="enter your answer" />
        <button type="submit" onClick={(e) => {e.preventDefault(); alert("wrong answer");}}>submit</button>
      </form>
      <button
        onClick={() => {navigate("/finish")}}>finish game</button>
    </div>
  );
}
