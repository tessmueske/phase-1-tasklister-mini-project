function addTaskToDOM(task) {
    const taskList = document.querySelector('#tasks');
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.append(taskItem);
  }
  
  document.querySelector('#create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.querySelector('#new-task-description');
    const task = taskInput.innerText;
    console.log(e.target[0].value);
    addTaskToDOM(e.target[0].value);
  });
  
function addDeleteButton(){
    //code here
}

//everything below this isn't functioning yet
  function addEventListenerToDeleteButtons(){
    let buttons = document.getElementsByClassName('delete_btn')
    for (let btn of buttons)
      btn.addEventListener('click', handleDelete)
  }
  
  function handleDelete(e){
    e.target.parentNode.remove()
  }