import { Component, Input } from '@angular/core';
import { ROUTES } from '../../const/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() path:string;
  @Input() title:string
  constructor(){
    this.path=ROUTES.home;
    this.title = ""
  }
}
