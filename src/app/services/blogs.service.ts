import { Injectable } from '@angular/core';
import { IBlogItem } from '../types/blog';
import { BlogItems } from '../untils/draft_data/blog_list';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blog_List: IBlogItem[] = []
  constructor() {
    this.blog_List = BlogItems
  }
  onUpDateBlogList(data: IBlogItem) {
    this.blog_List = this.blog_List.map((item) => item.id === data.id ? data : item)
  }
}
