import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { readRiddleServer } from "../util/CRUD.ts";
import Riddle from "../components/Riddle.tsx";

export default function ShowRiddles() {
  const navigate = useNavigate();
  const [riddle, setRiddle] = useState([]);
  const [counter, setCounter] = useState(0);
  // const [timer, setTimer] = useState(0);

  useEffect(() => {
  async function fatchData() {
    const data = await readRiddleServer();
    setRiddle(data);
  }
  fatchData();
}, []);



    console.log("counter is", counter);
  console.log("riddle.length:", riddle.length);

  if (counter >= riddle.length) {
    navigate("/finish");
    return
  } else {
    return (
      <div>
        {/* <h4>{timer}</h4> */}
        {riddle && <Riddle riddle={riddle[counter]} setcount={setCounter} />}
      </div>
    );
  }
}
