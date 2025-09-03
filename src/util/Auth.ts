import {insertTokenToLS} from "./LocalStorage.ts"
export async function Auth(path:string,successMsg:string ,name?:string ,password?:string){
  const response = await fetch(`http://localhost:3000/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password }),
  });
  if (response.ok) {
    const val = await response.json();
    insertTokenToLS("token", val);
    alert(successMsg);
    // כאן אני מחזיר בסוף הפונקצייה את התפקיד שיש בתוך הטוקן
    return JSON.parse(atob(val.split('.')[1]));
  } else {
    const msg = await response.text();
    alert(msg);
    return null
    
  }

}