themeButtons.forEach((color, index) => {
  color.addEventListener("click", () => {
    let selectedColor;
    switch (index) {
      case 20:
        selectedColor = colorPicker.color.hexString;
        break;
      default:
        let dataColor = color.getAttribute("data-color");
        selectedColor = dataColor;
    }
    document.querySelector(":root").style.setProperty("--Red", selectedColor);
  });
});
