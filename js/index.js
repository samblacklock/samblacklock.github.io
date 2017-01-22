const root = document.querySelector(':root');
const rootStyles = window.getComputedStyle(root);
const fooBar = rootStyles.getPropertyValue('--grad1');
  
var x = 12;
var y = 296;
var z = 270;

setInterval(function() {
  if(x > 360) x = 1;
  document.documentElement.style.setProperty('--grad1', `hsl(${x}, 79%, 59%)`);
  x++;
}, 100);

setInterval(function() {
  if(y < 1) y = 360;
  document.documentElement.style.setProperty('--grad2', `hsl(${y}, 31%, 45%)`);
  y--;
}, 100);

setInterval(function() {
  if(z > 360) z = -360;
  document.documentElement.style.setProperty('--gradAngle', `${z}deg`);
  z--;
}, 500);