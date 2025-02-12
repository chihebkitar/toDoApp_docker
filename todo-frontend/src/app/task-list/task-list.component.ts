import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  newTaskDescription: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error(err)
    });
  }

  addTask(): void {
    if (this.newTaskDescription.trim()) {
      const newTask: Task = {
        description: this.newTaskDescription,
        completed: false
      };
      this.taskService.createTask(newTask).subscribe({
        next: (createdTask) => {
          this.tasks.push(createdTask);
          this.newTaskDescription = '';
        },
        error: (err) => console.error(err)
      });
    }
  }

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task.id!, task).subscribe({
      next: () => console.log('Tâche mise à jour'),
      error: (err) => console.error(err)
    });
  }

  deleteTask(taskId?: number): void {
    if (taskId) {
      this.taskService.deleteTask(taskId).subscribe({
        next: () => {
          this.tasks = this.tasks.filter(t => t.id !== taskId);
        },
        error: (err) => console.error(err)
      });
    }
  }
}
