const todos = ["Get groceries", "Wash car"];

render();

function addTodo() {
	const textbox = document.getElementById("textbox-element");
	const title = textbox.value;
	todos.push(title);

	render();
}

// A Todo render function - prints a todos to the screen and resets the state
// of the old todo entry.
function render() {
	// Reset the state of the old list of todos
	const resetList = document.getElementById("todo-render");
	resetList.innerHTML = " ";

	todos.forEach(function (todo) {
		const element = document.createElement("div");
		element.innerText = todo.toString();
		const todoRender = document.getElementById("todo-render");
		todoRender.appendChild(element);
	});
}
