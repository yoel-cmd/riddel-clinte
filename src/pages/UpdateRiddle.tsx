export default function UpdateRiddle() {
  return (
    <div>
      <h1>Update a Riddle</h1>
      <form action="">
        <input type="text" placeholder="Enter riddle ID" />
        <input type="text" placeholder="Enter new riddle question" />
        <input type="text" placeholder="Enter new riddle answer" />
        <button type="submit" onClick={(e) => {e.preventDefault(); alert("Riddle Updated");}}>Update Riddle</button>
      </form>
    </div>
  );
}
