import { Component, OnInit } from '@angular/core';
import { Task } from './model/Task';
import { DataHandlerService } from './service/data-handler.service';
import { Category } from './model/Category';
import { CanColor } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todo';

  tasks: Task[];
  categories: Category[];

  public selectedCategory: Category = null;

  constructor(private dataHandler: DataHandlerService){

  }
  ngOnInit(): void {
    // this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks)
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories)

    this.onSelectCategory(null)
  }

  public onSelectCategory(category: Category) {
    this.selectedCategory = category;

    this.dataHandler.searchTasks(
      this.selectedCategory,
      null,
      null,
      null,
    ).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  onUpdateTask(task: Task) {
    console.log(task);
  }


}
