let nextTodoId = 0

type test = {
  id: number,
  text?: string,
  completed?: boolean,
  type?: string
}

const addTodo = (text: string): test => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

const toggleTodo = (id: number): test => ({
  type: 'TOGGLE_TODO',
  id
})

export { addTodo, toggleTodo }