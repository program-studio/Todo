import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Category } from 'src/app/model/Category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  @Input()
  public categories: Category[]

  @Output()
  public selectCategory = new EventEmitter<Category>()

  public selectedCategory: Category

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    // this.categories = this.dataHandler.getCategories()
    // this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories)
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories)

  }
  showTasksByCategory(category: Category) {
    // this.selectedCategory = category
    // this.dataHandler.fillTasksByCategory(category)

    if(this.selectedCategory === category) {
      return;
    }
    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory)

  }

}
