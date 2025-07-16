const btn = document.getElementById("translate-btn");
const input = document.getElementById("input-text");
const output = document.getElementById("translation-output");
const sourceLang = document.getElementById("source-lang");
const targetLang = document.getElementById("target-lang");

btn.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;

  output.textContent = "Translating...";

  try {
    const res = await fetch("http://localhost:5000/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text,
        source_lang: sourceLang.value,
        target_lang: targetLang.value
      })
    });

    const data = await res.json();
    output.textContent = data.translation || "[Error: no response]";
  } catch (err) {
    output.textContent = "[Error: unable to reach translator]";
  }
});