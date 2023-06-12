const floatyText = document.querySelectorAll(".floaty-text > *");

floatyText.forEach((span) => {
  span.style.gridArea =
    Math.floor(Math.random() * 14) +
    1 +
    "/" +
    (Math.floor(Math.random() * 14) + 1) +
    "/" +
    (Math.floor(Math.random() * 14) + 1) +
    "/" +
    (Math.floor(Math.random() * 14) + 1);
  const size = Math.floor(Math.random() * 2.4) + 0.6;
  span.style.fontSize = size + "rem";
  span.style.zIndex = Math.floor(size * 100);
});
