// script.js

// Select all read more buttons
const readMoreButtons = document.querySelectorAll(".read-more");

// Sample blog content
const blogContent = [
  "This is the full content of the KUET Clone blog post. Here I explain how I built the KUET website using HTML, CSS, and JavaScript, step by step.",
  "This post shares my journey building my portfolio site from scratch, including layout design, responsiveness, and deployment to GitHub Pages."
];

// Create modal element
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <p class="modal-text"></p>
  </div>
`;
document.body.appendChild(modal);

// Modal style
const style = document.createElement("style");
style.innerHTML = `
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 30px;
  max-width: 600px;
  border-radius: 8px;
  position: relative;
}
.close {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 24px;
  cursor: pointer;
  color: #800000;
}
.modal-text {
  font-size: 1rem;
  color: #333;
}
`;
document.head.appendChild(style);

// Open modal on button click
readMoreButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.querySelector(".modal-text").textContent = blogContent[index];
  });
});

// Close modal
modal.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
