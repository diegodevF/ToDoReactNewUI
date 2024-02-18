import IconCross from "../Icons/IconCross";
import IconCheck from "../Icons/IconCheck";

const TodoItems = ({ todo, removeTodo, updateTodo }) => {
   const { id, title, completed } = todo;

   return (
      <article className="flex items-center gap-11 border-b p-4 px-4 transition-all duration-1000 dark:bg-gray-800">
         <button
            onClick={() => updateTodo(id)}
            className={` h-6 w-6 flex-none rounded-full border-2 ${
               completed
                  ? "flex  items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  : "inline-block "
            }`}
         >
            {completed && <IconCheck />}
         </button>
         <p
            className={`grow text-gray-700 transition duration-1000 ease-in-out dark:text-gray-400 ${
               completed &&
               "text-stone-800/50 line-through transition-all duration-1000 ease-in-out dark:text-gray-700"
            }`}
         >
            {title}
         </p>
         <button onClick={() => removeTodo(id)} className="flex-none">
            <IconCross />
         </button>
      </article>
   );
};

export default TodoItems;
