const canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext('2d');

//Cart object
const car = new Car(100, 100, 30, 50);
car.draw(ctx);