// Create the menu
let menu = document.createElement('div');
menu.style.zIndex = '9999';
menu.style.background = '#fff';
menu.style.padding = '20px';
menu.style.position = 'fixed';
menu.style.top = '50%';
menu.style.left = '50%';
menu.style.transform = 'translate(-50%, -50%)';
menu.style.boxShadow = '1px 1px 10px rgba(0, 0, 0, 0.25)';
menu.style.borderRadius = '5px';

// Create the buttons
let btn1 = document.createElement('button');
btn1.innerHTML = 'Button 1';
btn1.style.marginRight = '10px';
btn1.style.padding = '5px 10px';
btn1.style.border = '1px solid #ccc';
btn1.style.background = '#fff';
btn1.style.cursor = 'pointer';
btn1.style.color = 'black';
btn1.onclick = () => execute('https://raw.githubusercontent.com/...');

let btn2 = document.createElement('button');
btn2.innerHTML = 'Button 2';
btn2.style.marginRight = '10px';
btn2.style.padding = '5px 10px';
btn2.style.border = '1px solid #ccc';
btn2.style.background = '#fff';
btn2.style.cursor = 'pointer';
btn2.style.color = 'black';
btn2.onclick = () => execute('https://raw.githubusercontent.com/...');

let btn3 = document.createElement('button');
btn3.innerHTML = 'Button 3';
btn3.style.marginRight = '10px';
btn3.style.padding = '5px 10px';
btn3.style.border = '1px solid #ccc';
btn3.style.background = '#fff';
btn3.style.cursor = 'pointer';
btn3.style.color = 'black';
btn3.onclick = () => execute('https://raw.githubusercontent.com/...');

let btn4 = document.createElement('button');
btn4.innerHTML = 'Close';
btn4.style.marginRight = '10px';
btn4.style.padding = '5px 10px';
btn4.style.border = '1px solid #ccc';
btn4.style.background = '#fff';
btn4.style.cursor = 'pointer';
btn4.style.color = 'black';
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
