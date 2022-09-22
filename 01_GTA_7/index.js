import './style.css';

import Player from "./player";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const image = document.querySelector("img");
const arrows = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
const awsd = ["w", "d", "s", "a"];

const player1 = new Player(0, 200, image, arrows);
const player2 = new Player(100, 200, image, awsd);

window.onload = () => animate();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player1.draw(ctx);
  player2.draw(ctx);
}