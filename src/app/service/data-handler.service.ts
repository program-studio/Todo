import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { TaskDAOArray } from '../data/dao/impl/TaskDAOArray';
import { CategoryDAOArray } from '../data/dao/impl/CategoryDAOArray';
import { CanColor } from '@angular/material/core';
import { Priority } from '../model/Priority';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  // taskSubject = new Subject<Task[]>()
  // taskSubject = new BehaviorSubject<Task[]>(TestData.tasks)
  // categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories)

  private taskDAOArray = new TaskDAOArray()
  private categoryDAOArray = new CategoryDAOArray()

  constructor() { 
    // this.fillTasks()
  }

  // getCategories(): Category[] {
  //   return TestData.categories;
  // }

  // fillTasks() {
  //   this.taskSubject.next(TestData.tasks)
  // }
  // fillTasksByCategory(category: Category) {
  //   const tasks = TestData.tasks.filter(task => task.category === category)
  //   this.taskSubject.next(tasks)
  // }

  getAllTasks(): Observable<Task[]> {
    return this.taskDAOArray.getAll()
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDAOArray.getAll()
  }

  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDAOArray.search(category, searchText, status, priority);
  }

}
