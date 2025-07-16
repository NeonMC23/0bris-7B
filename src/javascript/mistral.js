const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  messages.innerHTML += `<div class="user">You: ${userInput}</div>`;
  input.value = "";

  setTimeout(() => {
    messages.scrollTop = messages.scrollHeight;
  }, 50);

  try {
    const response = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userInput }),
    });

    const data = await response.json();
    messages.innerHTML += `<div class="bot">AI: ${data.answer}</div>`;

    setTimeout(() => {
      messages.scrollTop = messages.scrollHeight;
    }, 50);
  } catch (err) {
    messages.innerHTML += `<div class="bot">AI: [Error: unable to reach local AI]</div>`;
    setTimeout(() => {
      messages.scrollTop = messages.scrollHeight;
    }, 50);
  }
});