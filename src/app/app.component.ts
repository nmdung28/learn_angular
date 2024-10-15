import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AlphaComp } from './pages/alpha/alpha.component';
import { HelloComponent } from './pages/hello/hello.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ROUTES } from './const/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, NgIf],
  template: `
  <app-header/>
    <router-outlet />
    <div *ngIf="!isBlogPage">
      <app-footer/>
    </div>

`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isRenderFooter?: boolean;
  isBlogPage: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const isBlogDetail = this.router.url.includes(ROUTES.blogs + "/")
    console.log(isBlogDetail, ROUTES.blogs + "/", this.router.routerState);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("event.url", event.url.includes(ROUTES.blogs + "/"));
        this.isBlogPage = event.url.includes("/" + ROUTES.blogs);
      }
    });
  }
}
