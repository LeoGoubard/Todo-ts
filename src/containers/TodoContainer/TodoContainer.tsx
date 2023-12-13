import TodoItem from "../TodoItem/TodoItem";


export const TodoContainer = () => {
  const todoItems = [
    "Do somthing",
    "Do something twice",
    "Do Something another time"
  ]
  return (
    <>
    {todoItems.map((todoItem, index) => (
      <TodoItem todo={todoItem} key={index} />
    ))}
    </>
  )
};