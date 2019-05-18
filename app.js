function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";


      newLi.textContent = toDo.title;

      newLi.appendChild(checkbox);
      toDoList.appendChild(newLi);

      let button = document.createElement('button');
      button.type = "submit";
      button.textContent = "Delete!";

      button.onclick = function(event) {
        toDos = toDos.filter(function(existingList) {
          return existingList.id !== toDo.id;
        });
        renderTheUI();
      };

      newLi.appendChild(button);

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
