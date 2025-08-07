// auth.js

function executeSecureQuery(query, params) {
  alert(
    "✅ SQL แบบปลอดภัย (Parameterized):\n\n" +
      query +
      "\n\nพารามิเตอร์: " +
      JSON.stringify(params)
  );
}

function testSecure(username, password) {
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  executeSecureQuery(query, [username, password]);
}

// รอ DOM โหลดให้เรียบร้อยก่อน
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login");
  const user = document.getElementById("user");
  const password = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("U submit");
    testSecure(user.value, password.value);
  });
});
