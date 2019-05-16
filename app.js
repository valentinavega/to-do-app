function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();


  newLi.textContent = title;
  newLi.appendChild(checkbox);
  newLi.appendChild(deleteButton);
  toDoList.appendChild(newLi);
  newToDoText.value = '';
     });
}

window.onload = function() {
  onReady();
};
