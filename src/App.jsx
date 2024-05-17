import styles from "./App.module.css";
import { Form } from "./components/form/Form";
import { TodoItem } from "./components/todoItem/TodoItem";

function getSubheading(numberOfTasks) {
  switch (true) {
    case numberOfTasks === 0:
      return "Brak zadań";
    case numberOfTasks === 1:
      return "1 zadanie";
    case numberOfTasks > 1 && numberOfTasks < 5:
      return `${numberOfTasks} zadania`;
    default:
      return `${numberOfTasks} zadań`;
  }
}

function App() {
  const todos = [
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem key={id} name={name} done={done} />
        ))}
      </ul>
    </div>
  );
}

export default App;
