import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategories } from '../../../types/categories';
import { ROUTES } from '../../../const/router';

@Component({
  selector: 'app-categorie-item',
  standalone: true,
  imports: [],
  templateUrl: './categorie-item.component.html',
  styleUrl: './categorie-item.component.scss'
})
export class CategorieItemComponent {
  @Input() item: ICategories
  @Input() currentId?:string
  @Output() emitClick = new EventEmitter<string>()
  categoriesPath = ROUTES.categories
  activeClass?: string
  constructor() {
    this.item = { id: "1", name: "a" }
    this.activeClass =""
  }
  onClick(id: string) {
    let paramId =""
    if (this.currentId !== id) {
      paramId = id
    } else {
      paramId = ""
    }
    this.emitClick.emit(paramId)
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    this.activeClass = this.currentId === this.item.id?" text-red-500":""
  }
}
