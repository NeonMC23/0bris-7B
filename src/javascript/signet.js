const form = document.getElementById("signet-form");
const list = document.getElementById("signet-list");
const titleInput = document.getElementById("signet-title");
const urlInput = document.getElementById("signet-url");

const bookmarks = JSON.parse(localStorage.getItem("signets") || "[]");
bookmarks.forEach(addSignetToList);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();
  if (!title || !url) return;

  const signet = { title, url };
  bookmarks.push(signet);
  localStorage.setItem("signets", JSON.stringify(bookmarks));
  addSignetToList(signet);
  form.reset();
});

function addSignetToList({ title, url }) {
  const li = document.createElement("li");

  const link = document.createElement("a");
  link.href = url;
  link.textContent = title;
  link.target = "_blank";

  const del = document.createElement("button");
  del.textContent = "✕";
  del.onclick = () => {
    const index = bookmarks.findIndex(b => b.title === title && b.url === url);
    if (index !== -1) {
      bookmarks.splice(index, 1);
      localStorage.setItem("signets", JSON.stringify(bookmarks));
      li.remove();
    }
  };

  li.appendChild(link);
  li.appendChild(del);
  list.appendChild(li);
}