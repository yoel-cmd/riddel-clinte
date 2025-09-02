export default function DeleteRiddle() {
  return (
    <div>
      <h1>Delete a Riddle</h1>
      <form action="">
        <input type="text" placeholder="Enter riddle ID to delete" />
        <button type="submit" onClick={(e) => {e.preventDefault(); alert("Riddle Deleted");}}>Delete Riddle</button>
      </form>
    </div>
  );
}
