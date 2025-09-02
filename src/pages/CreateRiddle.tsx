export default function CreateRiddle() {
  return (
    <div>
      <h1>Create a New Riddle</h1>
      <form action="">
        <input type="text" placeholder="Enter riddle question" />
        <input type="text" placeholder="Enter riddle answer" />
        <button type="submit" onClick={(e) => {e.preventDefault(); alert("Riddle Created");}}>Create Riddle</button>
      </form>
    </div>
  );
}
