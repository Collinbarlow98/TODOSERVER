
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
      dateCompleted: null,
      isComplete: false
    })
  })
    .then(response => response.json())
    .then((json) =>
      todoUL.innerHTML += `<div><div>Title: ${json.title}</div>
        <div>Priority: ${json.priority}</div>
        <div>Date Created: ${json.dateCreated}</div>
        <div>Date Completed: ${json.dateCompleted}</div>
        <div><input id="${json.title}dateCompleted" type="text" placeholder="Date Completed"></div>
        <div>Complete: ${json.isComplete}</div>
        <div>Completed:<input id="${json.title}isComplete" type="checkbox"></div>
        <button onClick="updateItem(${json})">Update</button></div><br>`
      )
})
