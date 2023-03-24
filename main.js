// Create the menu
let menu = document.createElement('div');
menu.style.zIndex = '9999';

// Create the buttons
let btn1 = document.createElement('button');
btn1.innerHTML = 'Button 1';
btn1.onclick = () => execute('https://raw.githubusercontent.com/...');

let btn2 = document.createElement('button');
btn2.innerHTML = 'Button 2';
btn2.onclick = () => execute('https://raw.githubusercontent.com/...');

let btn3 = document.createElement('button');
btn3.innerHTML = 'Button 3';
btn3.onclick = () => execute('https://raw.githubusercontent.com/...');

let btn4 = document.createElement('button');
btn4.innerHTML = 'Close';
btn4.onclick = () => menu.remove();

// Append the buttons to the menu
menu.appendChild(btn1);
menu.appendChild(btn2);
menu.appendChild(btn3);
menu.appendChild(btn4);

// Append the menu to the document
document.body.appendChild(menu);

// Function to execute the code from the URL
function execute(url) {
  fetch(url)
    .then(response => response.text())
    .then(code => {
      eval(code);
    });
}
