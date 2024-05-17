export function getSubheading(numberOfTasks) {
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
