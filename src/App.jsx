import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
   const [todos, setTodos] = useState(initialStateTodos);

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   const createTodo = (title) => {
      const newTodo = {
         id: Date.now(),
         title: title.trim(),
         completed: false,
      };
      setTodos([...todos, newTodo]);
   };

   const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const updateTodo = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
         ),
      );
   };

   const countTask = todos.filter((todo) => !todo.completed).length;

   const clearCompleted = () => {
      setTodos(todos.filter((todo) => !todo.completed));
   };

   const [filter, setFilter] = useState("all");

   const changedFilter = (filter) => setFilter(filter);

   const filterTodos = () => {
      switch (filter) {
         case "all":
            return todos;
         case "active":
            return todos.filter((todo) => !todo.completed);
         case "completed":
            return todos.filter((todo) => todo.completed);
         default:
            return todos;
      }
   };

   return (
      <div className="min-h-screen bg-gray-300 bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('src/assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
         <Header />
         <main className="container mx-auto mt-8 px-4 md:max-w-xl ">
            <TodoCreate createTodo={createTodo} />
            <TodoList
               todos={filterTodos()}
               removeTodo={removeTodo}
               updateTodo={updateTodo}
            />
            <TodoComputed
               countTask={countTask}
               clearCompleted={clearCompleted}
            />
            <TodoFilter changedFilter={changedFilter} filter={filter} />
         </main>
         <p className="flex justify-center gap-4  p-4 dark:text-gray-400">
            Drag and Drop - No Disponible
         </p>
      </div>
   );
};
export default App;
