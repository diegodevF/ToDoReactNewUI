const TodoComputed = ({ countTask, clearCompleted }) => {
   return (
      <section className="flex justify-between rounded-b-md bg-white px-4 py-4  transition-all duration-1000 dark:bg-gray-800">
         <span className="text-gray-400">{countTask} items left</span>
         <button
            className=" text-gray-400 transition duration-200 ease-in-out hover:text-blue-500"
            onClick={clearCompleted}
         >
            Clear Completed
         </button>
      </section>
   );
};

export default TodoComputed;
