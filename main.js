const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.querySelector("#download-btn");
const uploadFile = document.querySelector("#upload-file");
const revertBtn = document.querySelector("#revert-btn");

// TODO: Filters

// Upload File
uploadFile.addEventListener("change", e => {
  // Get File
  const file = document.querySelector("#upload-file").files[0];

  // Init FileReader
  const reader = new FileReader();

  if (file) {
    // Set file name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);
  }

  // Add image to canvas
  reader.addEventListener(
    "load",
    () => {
      // Create img
      img = new Image();
      // Set src
      img.src = reader.result;
      // On image load, add to canvas
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      };
    },
    false
  );
});
