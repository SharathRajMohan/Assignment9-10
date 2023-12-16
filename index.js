// Name: Sharath Mohan StudentID: C0894212
document.addEventListener("DOMContentLoaded", function () {
  // Canvas
  var drawingCanvas = document.getElementById("main");
  var canvasContext = drawingCanvas.getContext("2d");
  var isPainting = false;

  // Set initial brush color and size
  var paintColor = "#000000"; // default to black
  var paintSize = 5;

  // Event listeners
  drawingCanvas.addEventListener("mousedown", initiateDrawing);
  drawingCanvas.addEventListener("mouseup", endDrawing);
  drawingCanvas.addEventListener("mousemove", drawOnCanvas);

  // Button event listeners
  document.getElementById("new").addEventListener("click", clearDrawing);
  document.getElementById("erase").addEventListener("click", useEraser);
  document.getElementById("black").addEventListener("click", function () {
    setColor("#000000");
  });
  document.getElementById("pink").addEventListener("click", function () {
    setColor("#F50057");
  });
  document.getElementById("blue").addEventListener("click", function () {
    setColor("#2979FF");
  });
  document.getElementById("yellow").addEventListener("click", function () {
    setColor("#FFD600");
  });

  // Slider event listener
  var sizeSlider = document.getElementById("slider");
  var paintSizeDisplay = document.getElementById("brushSize");
  sizeSlider.addEventListener("input", function () {
    paintSize = this.value;
    paintSizeDisplay.textContent = paintSize;
  });

  // Functions
  function initiateDrawing(e) {
    isPainting = true;
    drawOnCanvas(e);
  }

  function endDrawing() {
    isPainting = false;
    canvasContext.beginPath();
  }

  function drawOnCanvas(e) {
    if (!isPainting) return;

    var rect = drawingCanvas.getBoundingClientRect();
    var x = e.pageX - rect.left;
    var y = e.pageY - rect.top;

    canvasContext.lineWidth = paintSize;
    canvasContext.lineCap = "round";
    canvasContext.strokeStyle = paintColor;

    canvasContext.lineTo(x, y);
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
  }

  function clearDrawing() {
    canvasContext.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  }

  function useEraser() {
    paintColor = "#ffffff"; // white color for eraser
    paintSize = 10; // set an appropriate size for eraser
    paintSizeDisplay.textContent = paintSize;
  }

  function setColor(color) {
    paintColor = color;
  }
});
