import { CommonDAO } from './CommonDAO';
import { Category } from 'src/app/model/Category';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/model/Task';
import { Priority } from 'src/app/model/Priority';
import { TestData } from '../../TestData';

// специфичные методы для работы с задачами (которые не входят в обычный CRUD)
export interface TaskDAO extends CommonDAO<Task> {

	// поиск задач по всем параметрам
	// если какой-либо параметр равен null - он не будет учитываться при поиске
	search (category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>;


	// кол-во завершенных задач в заданной категории (если category === null, то для всех категорий)
	getCompletedCountInCategory(category: Category): Observable<number>;

	// кол-во незавершенных задач в заданной категории (если category === null, то для всех категорий)
	getUncompletedCountInCategory(category: Category): Observable<number>;

	// кол-во всех задач в заданной категории (если category === null, то для всех категорий)
	getTotalCountInCategory(category: Category): Observable<number>;

	// кол-во всех задач в общем
	getTotalCount(): Observable<number>;

}