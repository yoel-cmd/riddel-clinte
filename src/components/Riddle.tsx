import { useRef } from "react";

type Riddle = {
  taskDescription: string;
  corectAnswer: string;
};

export default function Riddle(props: { riddle: Riddle | undefined; setcount: Function }) {
  const answerRef = useRef<HTMLInputElement>(null);
    if(!props.riddle){
        return <h1>no riddle</h1>
    }
  return (
    <>
      <h1>Riddle</h1>
      <p>{props.riddle?.taskDescription}</p>

      <form action="">
        <input type="text" placeholder="enter your answer" ref={answerRef} />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (answerRef.current?.value === props.riddle?.corectAnswer) {
              props.setcount((prev: number) => prev + 1);
            }
            else{
                alert("wrong answer")
            }
          }}
        >
          submit
        </button>
      </form>
    </>
  );
}
