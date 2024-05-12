/* DAY 1 
ASSIGNMENT======== */
alert(
  "Hi there,\nMy name is Ibiere William west, and I'm excited to embark on a journey of learning JavaScript. I've always been passionate about technology and creating dynamic, interactive experiences on the web, and I believe that mastering JavaScript will open up a world of possibilities for me.\nBy mastering JavaScript, I aim to become a versatile developer capable of building full-stack applications and contributing to various projects."
);

/* DAY 2
ASSIGNMENT==== */

const name = prompt('What is your name?');
const age = parseInt(prompt('Enter your age.'));
if (name !== '' && age === 18) {
  alert("Welcome It's Your Birthday");
} else if (name !== '' && age >= 18) {
  alert("Welcomed, You're An Elder");
} else if (name !== '' && age <= 18) {
  console.log('You Are Not 18 Yet');
} else alert('ROBOT!');
