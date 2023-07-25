// Ambil elemen gambar utama dan grid
const mainImage = document.getElementById("main-image");
const imageGrid = document.getElementById("image-grid");

// Tambahkan event listener ke grid untuk mendeteksi klik pada gambar-gambar di dalamnya
imageGrid.addEventListener("click", (event) => {
  // Pastikan yang di klik adalah elemen gambar (tag <img>)
  if (event.target.tagName === "IMG") {
    // Dapatkan URL gambar yang di klik
    const clickedImageUrl = event.target.getAttribute("src");

    // Ganti URL gambar utama dengan URL gambar yang di klik
    mainImage.querySelector("img").setAttribute("src", clickedImageUrl);
  }
});
const colorButtons = document.querySelectorAll(".flex.flex-col.ml-19 button");
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedColor = button.getAttribute("data-warna");

    mainImage.querySelector("img").setAttribute("src", `img/${selectedColor}.jpg`);
  });
});
