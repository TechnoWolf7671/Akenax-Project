let menuDiv = document.createElement('div');
menuDiv.id = 'kryoMenu';
let menuTitle = document.createElement('h1');
menuTitle.innerText = 'Kryo Menu';
menuDiv.appendChild(menuTitle);
let iReadyButton = document.createElement('button');
iReadyButton.innerText = 'Iready Menu';
menuDiv.appendChild(iReadyButton);
let blooketButton = document.createElement('button');
blooketButton.innerText = 'Blooket Menu';
menuDiv.appendChild(blooketButton);
let akenaxButton = document.createElement('button');
akenaxButton.innerText = 'Akenax Loader';
menuDiv.appendChild(akenaxButton);
let closeButton = document.createElement('button');
closeButton.innerText = 'Close';
menuDiv.appendChild(closeButton);
document.body.appendChild(menuDiv);
closeButton.addEventListener('click', () => {
  menuDiv.remove();
});
iReadyButton.addEventListener('click', () => {
  let script = document.createElement('script');
  script.src = 'https://raw.githubusercontent.com/username/repo/master/file.js';
  document.body.appendChild(script);
})
blooketButton.addEventListener('click', () => {
  let script = document.createElement('script');
  script.src = 'https://raw.githubusercontent.com/username/repo/master/file.js';
  document.body.appendChild(script);
});
akenaxButton.addEventListener('click', () => {
  let script = document.createElement('script');
  script.src = 'https://raw.githubusercontent.com/username/repo/master/file.js';
  document.body.appendChild(script);
});
