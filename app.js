function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

  // get the text
  let title = newToDoText.value;

  // create a new li
  let newLi = document.createElement('li');

  // create a new input
  let checkbox = document.createElement('input');

  // set the input's type to checkbox
  checkbox.type = "checkbox";

  // add delete button
    let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

     deleteButton.addEventListener("click", function(event) {
        toDoList.removeChild(this.parentElement);
    });

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
