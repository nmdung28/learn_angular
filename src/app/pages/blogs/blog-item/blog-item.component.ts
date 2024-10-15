import { Component, Input, input } from '@angular/core';
import { IBlogItem } from '../../../types/blog';
import { DatePipe } from '@angular/common';
import { TimeAgoPipe } from "../../../untils/pipe_custom/time_ago";
import { ROUTES } from '../../../const/router';
import { CatgoriesItemBlog } from './categories';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [DatePipe, TimeAgoPipe,CatgoriesItemBlog],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
@Input() item:IBlogItem | undefined
parentPage = ROUTES.blogs
constructor(){}
}
