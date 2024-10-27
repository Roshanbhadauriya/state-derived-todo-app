const form = document.querySelector("form");
const bountyArea = document.querySelector(".bounty-area");
let todos = [];

function addTodo() {
  todos.push({ title: document.querySelector("input").value });

  render();
}




function createComponent(todo, i) {
  let newDiv = document.createElement("div");
  let p = document.createElement("p");
  p.className = "para";
  p.appendChild(document.createTextNode(todo.title));
  newDiv.id = id;
  newDiv.className = "bounty";

  let edit = document.createElement("a");
  edit.className = "edit";
  edit.appendChild(document.createTextNode("edit"));
  let deleteit = document.createElement("a");
  deleteit.className = "delete";
  deleteit.appendChild(document.createTextNode("delete"));

  newDiv.appendChild(p);
  newDiv.appendChild(edit);
  newDiv.appendChild(deleteit);

  return newDiv;
}

function render() {
  bountyArea.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    id = i;
    const todo = todos[i];
    let childtodo = createComponent(todo, i);
    bountyArea.appendChild(childtodo);
    bountyArea.style.padding = "1rem";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addTodo();
  document.querySelector("#todos").value = "";
});



document.querySelector(".bounty-area").addEventListener("click" , function(e){
 
    if(e.target.className === "delete"){
       let parent = e.target.parentNode;
       let ids = parent.id;
       todos.splice(ids,1);
       render();
    }
     
   })