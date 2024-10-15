import { Component, Input } from '@angular/core';
import { IComment } from '../../types/blog';
import { TimeAgoPipe } from '../../untils/pipe_custom/time_ago';

@Component({
  selector: 'app-comment-item',
  standalone: true,
  imports: [TimeAgoPipe],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.scss'
})
export class CommentItemComponent {
  @Input() item?: IComment;
  level?:number|undefined =0
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.level = this.item?.level
  }
}
