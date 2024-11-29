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
  popupDiv.style.borderRadius = "8px"; // Add rounded corners for a modern look

  // Set innerHTML for popup div
  popupDiv.innerHTML = `
    <div class="popup-container" style="
      background: linear-gradient(
        90deg,
        rgba(142, 36, 170, 0.2),
        rgba(216, 27, 96, 0.2)
      );
      border-radius: 8px;
      overflow: hidden;
    ">
      <div class="title-bar" style="
        background: linear-gradient(
          90deg,
          rgba(142, 36, 170, 0.5),
          rgba(216, 27, 96, 0.5)
        );
        color: ${titleText === "Error" ? "red" : "white"};
        padding: 10px;
        cursor: move;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <span>${titleText}</span>
        <button class="close-button" style="
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
        ">X</button>
      </div>
      <div class="content-div" style="
        padding: 20px;
        color: ${titleText === "Error" ? "red" : "black"};
        font-size: 14px;
        line-height: 1.6;
      "></div>
    </div>
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
