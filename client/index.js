
const url = "http://localhost:3000/todos"

let title = document.getElementById('title')
let priority = document.getElementById('priority')
let dateCreated = document.getElementById('dateCreated')
let submitButton = document.getElementById('submitButton')
let todoUL = document.getElementById('todoUL')

submitButton.addEventListener("click", function() {
  fetch(url, {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      title: title.value,
      priority: priority.value,
      dateCreated: dateCreated.value,
      dateCompleted: null
    })
  })
    .then(response => response.json())
    .then((json) => {
      let title = json.title
      let titleid = title.replace(/ /g,'')
      todoUL.innerHTML += `<div>
        <div>Title: ${json.title}</div>
        <div>Priority: ${json.priority}</div>
        <div>Date Created: ${json.dateCreated}</div>
        <div id="${titleid}date" >Date Completed: ${json.dateCompleted}</div>
        <input id="${titleid}" type="text" placeholder="Date Completed">
        <button onClick="updateItem(this, ${titleid})">Update</button>
        <button onClick="deleteItem(this)">Delete</button>
        </div>`
      })
})

function updateItem(obj, item) {
  if(item.value != '') {
    let completedText = document.getElementById(`${item.id}date`)
    completedText.innerHTML = "Date Created: " + item.value
    let div = obj.parentElement
    div.removeChild(item)
    div.removeChild(obj)
    completedUL.append(div)
  }
}

function deleteItem(obj) {
  let div = obj.parentElement
  if (div.parentElement == todoUL){
    todoUL.removeChild(div)
  } else {
    completedUL.removeChild(div)
  }
}
