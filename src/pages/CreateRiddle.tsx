import { useRef } from "react";

export default function CreateRiddle() {
  const nameRef = useRef<HTMLInputElement>(null);
  const questionRef = useRef<HTMLInputElement>(null);
  const answerRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div>
      <h1>Create a New Riddle</h1>
      <form ref={formRef} action="">
        <input type="text" name="name" placeholder="Enter riddle name" ref={nameRef} />
        <input type="text" name="taskDescription" placeholder="Enter riddle question" ref={questionRef} />
        <input type="text" name="corectAnswer" placeholder="Enter riddle answer" ref={answerRef} />
        <button type="submit" onClick={(e) => {e.preventDefault();
        
        if (!questionRef.current || !answerRef.current||!nameRef.current) return;
          const formData = new FormData(formRef.current as HTMLFormElement);
                const riddle: Record<string, any> = {};

                formData.forEach((value, key) => {
                    riddle[key] = value;  
                });
                fetch("https://ridlle-game-server.onrender.com/create-ridlle", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(riddle),
                });
                alert("Riddle Created");
            }}>
            Create Riddle
        </button>
      </form>
    </div>
  );
}
