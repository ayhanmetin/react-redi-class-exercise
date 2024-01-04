# ToDo List React Application

## Overview

This React Todo application is a simple demonstration of using React hooks and state management in a functional component. The app allows users to add and remove todo items dynamically.

## Features

- Add new todo items.
- Remove todo items by clicking on them.
- Use of React's `useReducer` for state management.
- Generation of unique IDs for each todo item using `uuid`.

# Todo Application Components and Workflow

## Components

- **AddTodo**: The main functional component that handles the addition and display of todo items.
- **todoReducer**: A reducer function imported from `./toDo` that manages the todo list's state based on dispatched actions.
- **initial**: An initial state object for the todo list, also imported from `./toDo`.
- **uuid**: A library used for generating unique identifiers for each todo item.

## How It Works

### Adding a Todo Item
1. The user types a task in the input field and clicks 'Add'.
2. `handleSubmit` function is triggered on form submission.
3. A new todo item is dispatched to the `todoReducer` with a unique ID and the entered title.

### Displaying Todo Items
- Todo items are displayed in a list.
- Each item is a clickable element.

### Removing a Todo Item
- When a todo item is clicked, a `REMOVE_TODO` action is dispatched.
- The `todoReducer` updates the state by removing the selected item.
