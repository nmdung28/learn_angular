import { Component } from '@angular/core';
import { IBlogItem } from '../../types/blog';
import { BlogItems } from '../../untils/draft_data/blog_list';
import { NgFor } from '@angular/common';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TimeAgoPipe } from '../../untils/pipe_custom/time_ago';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgFor, BlogItemComponent, SideBarComponent, TimeAgoPipe, FooterComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  blogItem: IBlogItem[] = BlogItems
  onSearchChange(event: string) {
    if (event){
      const filterItem = BlogItems.filter(i => i.title?.toLocaleLowerCase()?.includes(event.toLocaleLowerCase()))
      this.blogItem = filterItem;
      return
    } 
    this.blogItem = BlogItems
  }
  onClickCate(event:string){
    if (event){
      const filterItem = BlogItems.filter(i => i.categories === event)
      this.blogItem = filterItem;
      return
    } 
    this.blogItem = BlogItems
  }
}
