import { Component } from '@angular/core';
import { Task } from "../modules/task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Task[] = [];
  newTask: string;

  addNewTask() {
    if (this.newTask) {
      let task = new Task();
      task.title = this.newTask;
      task.isCompleted = false;
      this.tasks.push(task)
      this.newTask = "";
    }
  }

  onChange(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted
  }

  onRemove(index: number) {
    this.tasks = this.tasks.filter((it, i) => index !== i)
  }
}