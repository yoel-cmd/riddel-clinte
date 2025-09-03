
export function insertRiddleToLS(key:string,obj: object) {
  const arrLocal=loadLS(key)
  arrLocal.push(obj)
  localStorage.setItem(key, JSON.stringify(arrLocal));
}

export function loadLS(key:string) {
  const token = localStorage.getItem(key);
  return token ? JSON.parse(token) : [];
}
export function insertTokenToLS(key:string,token: string) {
  localStorage.setItem(key, token);
}

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
