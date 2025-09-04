export function createRiddle(riddle: Record<string, any>) {
    fetch("http://localhost:3000/create-ridlle", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(riddle),
    });
}

export async function readRiddleServer() {
    try { 
        const res = await fetch('http://localhost:3000/readRiddle')
        const data = await res.json();  
        return data
    }
    catch (err) {
        console.log('err',);
    }
}
