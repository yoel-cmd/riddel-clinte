export function createRiddle(riddle: Record<string, any>) {
    fetch("http://localhost:3000/create-ridlle", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(riddle),
    });
}
