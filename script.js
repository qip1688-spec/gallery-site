const categories = {
  "plush_new": "Plush New",
  "face_shell": "Face Shell",
  "sample_display": "Sample Display"
};

const gallery = document.getElementById("gallery");

for (const folder in categories) {
  const section = document.createElement("div");
  section.className = "section";

  const title = document.createElement("h2");
  title.innerText = categories[folder];
  section.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "grid";

  for (let i = 1; i <= 30; i++) {
    const img = document.createElement("img");
    img.src = `gallery/${folder}/${i}.jpg`;
    img.onerror = () => img.remove();
    grid.appendChild(img);
  }

  section.appendChild(grid);
  gallery.appendChild(section);
}
