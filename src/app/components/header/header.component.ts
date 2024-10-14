import { Component } from '@angular/core';
import { ROUTES } from '../../const/router';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  linkPathHome = ROUTES.home
  linkPathAlpha = ROUTES.alpha
  linkPathExample = ROUTES.example
  linkPathFormat = ROUTES.format
  linkPathHello = ROUTES.hello
  linkPathBlogs=ROUTES.blogs
  constructor(){}
}
