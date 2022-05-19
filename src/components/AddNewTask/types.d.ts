declare namespace iAddNewTask {
  interface AddNewTaskForm {
    title: string;
    description: string;
    date: Date;
    time: string;
    priority: string;
    category: string;
  }
}

export { iAddNewTask };