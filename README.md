🎲 Riddle Game App

A riddle game app with support for Users, Admins, and Guests.

🚀 Features

Authentication with JWT

Role-based access control:

User → can play, create riddles, and read riddles

Admin → full CRUD (currently only Create + Read implemented)

Guest → can view riddles via public API only

CRUD on riddles:

✅ Create

✅ Read

❌ Update (not yet)

❌ Delete (not yet)

Leaderboard for players

🔑 Admin Test Account

Username: inon

Password: 1234

📂 Project Structure

Backend: Node.js + Express, MongoDB, JWT, role-based middleware

Frontend: React (Vite), React Router, LocalStorage

Main components:

LoginOrSignUp → Sign up / login

AdminOrUser → Main screen after login

ShowRiddles → Play riddles

AllRiddle → CRUD → Read riddles

CreateRiddle → CRUD → Create riddles

GuestPage → Guest mode, public riddles

⚙️ Endpoints
Public

GET /readRiddlePublic → read riddles (no token required)

Protected (User/Admin)

GET /readRiddle

POST /create-ridlle

PUT /update-riddle/:id (Admin only, not yet implemented)

DELETE /delete-riddle/:id (Admin only, not yet implemented)

Auth

POST /siging → register (role = user by default)

POST /login → login

🔄 Flow (Diagram)
flowchart TD
  A[Welcome Page] -->|Login/SignUp| B[LoginOrSignUp]
  A -->|Guest Mode| C[GuestPage]
  B -->|User/Admin Token| D[AdminOrUser]

  D -->|Start Game| E[ShowRiddles]
  D -->|Leaderboard| F[Leaderboard]
  D -->|CRUD (Admin only)| G[CRUD Page]

  C -->|Public API| H[(readRiddlePublic)]
  E -->|Protected API| I[(readRiddle)]
  G -->|Create/Read| J[(CRUD API)]

---------------------------------------------------------------------------------------------------------------------------

📘 README (עברית)
🎲 אפליקציית משחק חידות

אפליקציית חידות עם תמיכה ב־משתמשים רגילים (User), מנהלים (Admin) ו־אורחים (Guest).

🚀 פיצ’רים

אימות עם JWT

הרשאות לפי תפקיד:

User → יכול לשחק, ליצור חידות, לקרוא חידות

Admin → גישה מלאה ל־CRUD (כרגע רק יצירה וקריאה עובדות)

Guest → יכול לקרוא חידות בלבד דרך מסלול ציבורי

CRUD על חידות:

✅ יצירה

✅ קריאה

❌ עדכון (עוד לא)

❌ מחיקה (עוד לא)

טבלת שיאים לשחקנים

🔑 חשבון אדמין לבדיקה

שם משתמש: inon

סיסמה: 1234

📂 מבנה הפרויקט

שרת: Node.js + Express, MongoDB, JWT, Middleware להרשאות

לקוח: React (Vite), React Router, LocalStorage

קומפוננטות עיקריות:

LoginOrSignUp → התחברות / הרשמה

AdminOrUser → מסך ראשי אחרי התחברות

ShowRiddles → משחק חידות

AllRiddle → קריאת כל החידות (CRUD → R)

CreateRiddle → יצירת חידה (CRUD → C)

GuestPage → מצב אורח

⚙️ נקודות קצה
ציבורי

GET /readRiddlePublic → קריאת חידות ללא טוקן

מוגן (User / Admin)

GET /readRiddle

POST /create-ridlle

PUT /update-riddle/:id (Admin בלבד, עדיין לא ממומש)

DELETE /delete-riddle/:id (Admin בלבד, עדיין לא ממומש)

אימות

POST /siging → הרשמה (ברירת מחדל role=user)

POST /login → כניסה

🔄 תרשים זרימה
flowchart TD
  A[דף הבית] -->|כניסה/הרשמה| B[LoginOrSignUp]
  A -->|מצב אורח| C[GuestPage]
  B -->|User/Admin Token| D[AdminOrUser]

  D -->|התחל משחק| E[ShowRiddles]
  D -->|טבלת שיאים| F[Leaderboard]
  D -->|CRUD (Admin בלבד)| G[CRUD Page]

  C -->|API ציבורי| H[(readRiddlePublic)]
  E -->|API מוגן| I[(readRiddle)]
  G -->|יצירה/קריאה| J[(CRUD API)]

📸 צילומי מסך

דף בית

לוגין / הרשמה

AdminOrUser (עם הכפתורים)

GuestPage

CRUD (יצירה / קריאה)
