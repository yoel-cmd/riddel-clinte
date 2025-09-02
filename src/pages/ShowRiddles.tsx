import { useNavigate } from "react-router";
    
export default function ShowRiddles() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Show Riddles 1,2,3</h1>
      <button onClick={() => {navigate("/finish")}}> finish game</button>
    </div>
  );
}
