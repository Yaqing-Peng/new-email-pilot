export function createPopupDiv(titleText, contentGenerator) {
  // Create popup div and set basic styles
  const popupDiv = document.createElement("div");
  popupDiv.style.position = "fixed";
  popupDiv.style.top = "50%";
  popupDiv.style.left = "50%";
  popupDiv.style.transform = "translate(-50%, -50%)";
  popupDiv.style.backgroundColor = "white";
  popupDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  popupDiv.style.zIndex = "1000";
  popupDiv.style.width = "400px";

  // Set innerHTML for popup div
  popupDiv.innerHTML =
    `
        <div class="title-bar" style="
          background-color: #f3f4f6;
          color: ` +
    (titleText === "Error" ? "red" : "black") +
    `;
          padding: 10px;
          cursor: move;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
        ">
          <span>${titleText}</span>
          <button class="close-button" style="
            background: none;
            border: none;
            color: black;
            font-size: 16px;
            cursor: pointer;
            margin-left: 10px;
          ">X</button>
        </div>
        <div class="content-div" style="padding: 20px; color: ` +
    (titleText === "Error" ? "red" : "black") +
    `;"></div>
      `;

  // Append popup to document body
  document.body.appendChild(popupDiv);

  // Get reference to the close button and content div
  const titleCloseButton = popupDiv.querySelector(".close-button");
  const contentDiv = popupDiv.querySelector(".content-div");

  // Close button click event listener
  titleCloseButton.addEventListener("click", () => {
    document.body.removeChild(popupDiv);
  });

  // Implement dragging functionality
  const titleBar = popupDiv.querySelector(".title-bar");
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  titleBar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - popupDiv.getBoundingClientRect().left;
    offsetY = e.clientY - popupDiv.getBoundingClientRect().top;
    popupDiv.style.transition = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      popupDiv.style.left = `${e.clientX - offsetX}px`;
      popupDiv.style.top = `${e.clientY - offsetY}px`;
      popupDiv.style.transform = "none";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Generate custom content
  if (contentGenerator && typeof contentGenerator === "function") {
    contentGenerator(contentDiv);
  }
}
