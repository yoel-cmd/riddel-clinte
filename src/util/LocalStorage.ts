export function loadLS(key: string) {
  const token = localStorage.getItem(key);
  console.log("📦 loadLS -> token raw from LS:", token);
  return token; 
}

export function insertTokenToLS(key: string, token: string) {
  console.log("💾 insertTokenToLS -> saving token:", token);
  localStorage.setItem(key, token);
}
