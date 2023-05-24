import "./style.css";

const COLOR_PALETTE = {
  "#FF499E": "Rose bonbon",
  "#D264B6": "Sky magenta",
  "#A480CF": "Lavender",
  "#779BE7": "Vista blue",
  "#49B6FF": "Argentinian blue"
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
  });
};

const addEventListenerToHexColorPicker = () => {
  const colorPickerSelect = document.querySelector("#hex-color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("input", (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = newColor;
    colorName.innerText = colorNameText;
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
addEventListenerToHexColorPicker();
