import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogItem } from '../../types/blog';
import { BlogItems } from '../../untils/draft_data/blog_list';
import { SideBarComponent } from '../blogs/side-bar/side-bar.component';
import { TimeAgoPipe } from '../../untils/pipe_custom/time_ago';
import { FooterComponent } from '../../components/footer/footer.component';
import { ROUTES } from '../../const/router';
import { NgFor, NgStyle } from '@angular/common';
import { CommentItemComponent } from '../../components/comment-item/comment-item.component';

@Component({
  selector: 'app-blogs-detail',
  standalone: true,
  imports: [SideBarComponent,TimeAgoPipe,FooterComponent,NgFor,CommentItemComponent,NgStyle],
  templateUrl: './blogs-detail.component.html',
  styleUrl: './blogs-detail.component.scss'
})
export class BlogsDetailComponent {
  item?:IBlogItem
  classSidebar="sidebar-detail-blogs"
  id: string | null | undefined;
  comment?:string=""
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.item = BlogItems.find(x => x.id === this.id)
  }
  onSearchChange(event: string) {
    if (event){
      this.router.navigateByUrl(ROUTES.blogs)
    } 
    
  }
  onClickCate(event:string){
    if (event){
      this.router.navigateByUrl(ROUTES.blogs)
    } 
  }
  onChangeText(event:any){
    this.comment = event.target.value
  }
  onSubmitText(){

  }
}
