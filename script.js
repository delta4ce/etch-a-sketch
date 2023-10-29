const canvas = document.querySelector('.canvas');

console.log(canvas)

console.log(canvas.style)



let i = 0;
while(i < (canvas.clientWidth / 16) * (canvas.clientHeight / 16)) { 
  const cell = document.createElement('div')
  cell.addEventListener('click', () => cell.style.backgroundColor = 'red')
  cell.classList.add('cell')
  canvas.appendChild(cell)
  i++;
}