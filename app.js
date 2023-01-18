"use strict";

let todo1 = "Add name to donation list";
let todo2 = "Register for football donation match";
let todo3 = "Play as a striker in the donation list";
let todo4 = "Score a hat-trick for my team in the donation game";
let todo5 = "Adding a new todo to the list";

let todos = [todo1, todo2, todo3, todo4, todo5];

/* A function that display the todos to the DOM. */
function addTodos(todoList) {
	for (let i = 0; i < todoList.length; i++) {
		let $element = document.createElement("div"); // create the element to add to the DOM
		// Operation calls to be done to element which includes styles, and other forms of manipulation
		$element.classList.add("todo-style"); // a css class-style added to the element
		$element.innerHTML = todoList[i]; // takes all the operations performed between the create element and the innerHTML
		document.body.appendChild($element); // setting the element in the document body
	}
}

/* function call */
addTodos(todos);
