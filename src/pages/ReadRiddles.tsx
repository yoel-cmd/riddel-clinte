import { useEffect, useState } from "react";
import { readRiddleServer } from "../util/CRUD.ts";

export default function AllRiddle() {

    const [riddle, setRiddle] = useState([])

    useEffect(() => {
  async function load() {
    const riddle = await readRiddleServer();
    console.log("📦 AllRiddle -> data received:", riddle);
    setRiddle(riddle);
  }
  load();
}, []);

console.log("📦 AllRiddle -> riddle state:", riddle);

    if (riddle.length === 0) {
        return <p>No riddles</p>
    } else {
        return <p>{JSON.stringify(riddle)}</p>
    }
}
