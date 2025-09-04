export function createRiddle(riddle: Record<string, any>) {
    fetch("https://ridlle-game-server.onrender.com/create-ridlle", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(riddle),
    });
}

export async function readRiddleServer() {
    try { 
        const res = await fetch('https://ridlle-game-server.onrender.com/readRiddle')
        const data = await res.json();  
        return data
    }
    catch (err) {
        console.log('err',);
    }
}
