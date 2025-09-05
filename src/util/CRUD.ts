import { loadLS } from "./LocalStorage.ts";
export async function createRiddle(riddle: Record<string, any>) {
  try {
    const token = loadLS("token");
    const res = await fetch("https://ridlle-game-server.onrender.com/create-ridlle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(riddle),
    });
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(" err:", error);
    return null;
  }
}

export async function readRiddleServer() {
  try {
    const token = loadLS("token");

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    console.log("📡 readRiddleServer -> headers sent:", headers);

    const res = await fetch("https://ridlle-game-server.onrender.com/readRiddle", {
      method: "GET",
      headers,
    });

    const raw = await res.clone().text();

    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(" readRiddleServer err:", err);
    return [];
  }
}
