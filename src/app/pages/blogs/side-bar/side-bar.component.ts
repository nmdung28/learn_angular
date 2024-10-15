import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ROUTES } from '../../../const/router';
import { Categories } from '../../../untils/draft_data/categories';
import { NgFor } from '@angular/common';
import { CategorieItemComponent } from '../../categories/categorie-item/categorie-item.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SearchComponent,NgFor,CategorieItemComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  categoriesPath = ROUTES.categories
  categories = Categories
  activeCateId:string =""
  @Input() customStyle?:string
  @Output() emitSearchChange = new EventEmitter<string>();
  @Output() emitClickCate = new EventEmitter<string>();
  constructor(){}
  onSearchChange(event:string){
    this.emitSearchChange.emit(event);
  }
  handleClickCateItem(event:string){
    this.emitClickCate.emit(event);
    this.activeCateId = event
  }
}
