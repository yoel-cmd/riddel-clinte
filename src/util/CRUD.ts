export function createRiddle(riddle: Record<string, any>) {
  const token = localStorage.getItem("token");
  return fetch("https://ridlle-game-server.onrender.com/create-ridlle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, 
    },
    body: JSON.stringify(riddle),
  });
}

export async function readRiddleServer() {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("https://ridlle-game-server.onrender.com/readRiddle", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
      },
    });

    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ err:", err);
    return [];
  }
}
