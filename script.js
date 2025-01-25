const spinButton = document.getElementById("spinButton");
const wheel = document.querySelector(".wheel");
const result = document.getElementById("result");

spinButton.addEventListener("click", () => {
  const randomDegree = Math.floor(Math.random() * 360); // Generate random degrees
  const spin = 3600 + randomDegree; // Spin multiple rotations
  const sliceDegree = 360 / 13; // Degree of each slice
  const winningSlice = Math.floor((360 - (randomDegree % 360)) / sliceDegree) % 13;

  wheel.style.transform = `rotate(${spin}deg)`; // Rotate the wheel

  setTimeout(() => {
    result.textContent = `The winning number is: ${winningSlice}`;
  }, 5000); // Wait for spin animation to complete
});
