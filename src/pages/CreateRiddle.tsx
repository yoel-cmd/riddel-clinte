import { useRef } from "react";
import { insertRiddleToLS } from "../util/LocalStorage";

export default function CreateRiddle() {
  const questionRef = useRef<HTMLInputElement>(null);
  const answerRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <h1>Create a New Riddle</h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter riddle question"
          ref={questionRef}
        />
        <input type="text" placeholder="Enter riddle answer" ref={answerRef} />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (!questionRef.current || !answerRef.current) return;
            const riddle = {
              question: questionRef.current.value,
              answer: answerRef.current.value,
            };
            insertRiddleToLS("riddles", riddle);
            alert("Riddle Created");
          }}
        >
          Create Riddle
        </button>
      </form>
    </div>
  );
}
