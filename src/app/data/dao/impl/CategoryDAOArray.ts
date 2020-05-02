import { CategoryDAO } from "../interface/CategoryDAO";
import { Observable, of } from "rxjs";
import { Category } from "../../../model/Category";
import { TestData } from '../../TestData';

export class CategoryDAOArray implements CategoryDAO {
	
	getAll(): Observable<Category[]> {
		return of(TestData.categories);
	}

	get(id: number): Observable<Category> {
		return undefined;
	}

	add(T): Observable<Category> {
		return undefined;
	}

	delete(id: number): Observable<Category> {
		return undefined;
	}

	search(title: string): Observable<Category[]> {
		return undefined;
	}

	update(T): Observable<Category> {
		return undefined;
	}

}