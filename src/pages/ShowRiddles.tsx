import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { readRiddleServer } from "../util/CRUD.ts";
import Riddle from "../components/Riddle.tsx";

export default function ShowRiddles() {
  const navigate = useNavigate();
  const [riddle, setRiddle] = useState([]);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    async function fatchData() {
      const data = await readRiddleServer();
      setRiddle(data);
    }
    fatchData();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTimer((prev: number) => prev + 1);
    }, 1000);
  },[]);

  //כאן אני עושה אפקט שמה שהוא עושה זה כל פעם שמשתנה המונה הוא עובר דרך פה ובודק אם נגמרו החידות

  // useEffect(() => {//חייב פה לשים בפנים כי אי אפשר לעשות  אסינק
  //   if (counter > riddle.length) {
  //     navigate("/finish");
  //   }
  // }, [counter]);

  // אם יש לי בדיקות שרק אם מתקיימות אני מציג  מסויימים
  // if(true){
  //   return <p>{counter<3 ?3:4}</p>
  // } else {
  //   return <h1></h1>
  // };
  console.log("counter is", counter);
  console.log("riddle.length:", riddle.length);

  if (counter >= riddle.length) {
    navigate("/finish");
    return
  } else {
    return (
      <div>
        <h4>{timer}</h4>
        {riddle && <Riddle riddle={riddle[counter]} setcount={setCounter} />}
      </div>
    );
  }
}
