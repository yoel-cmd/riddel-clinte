
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


