let modaldialog = document.getElementById("dialog");
let modaldialogTitle = document.getElementById("dialog-title");
let modaldialogMessage = document.getElementById("dialog-message");
modaldialog.innerHTML = `
<div>
  <div class="dialog-container">
  <h3 id="dialog-title" class="lang" key="dialog-title">Error</h3>
  <p id="dialog-message" class="lang" key="dialog-message"></p>
  <a id="close" class="lang" key="dialog-close">Close</a>
  </div>
</div>
`;
let closeDialig = document.getElementById("close");
closeDialig.addEventListener("click", () => {
  modaldialog.style.display = "none";
});
