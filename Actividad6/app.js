const input = document.getElementById('inputName');
const addBtn = document.getElementById('addBtn');
const randomBtn = document.getElementById('randomBtn');
const list = document.getElementById('nameList');

function addName() {
  const v = input.value.trim();
  if (!v) return;
  const li = document.createElement('li');
  li.textContent = v;
  list.appendChild(li);
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addName);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') addName();
});

randomBtn.addEventListener('click', () => {
  const items = Array.from(list.querySelectorAll('li'));
  if (!items.length) return;
  items.forEach(i => i.classList.remove('selected'));
  const i = Math.floor(Math.random() * items.length);
  items[i].classList.add('selected');
});

list.addEventListener('click', e => {
  if (e.target.tagName === 'LI') e.target.remove();
});
