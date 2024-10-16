import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AlphaComp } from './pages/alpha/alpha.component';
import { HelloComponent } from './pages/hello/hello.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ROUTES } from './const/router';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/reducer';
import { MiddleModule } from './middle_module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, NgIf, ReactiveFormsModule,
  ],
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("event.url", event.url.includes(ROUTES.blogs + "/"));
        this.isBlogPage = event.url.includes("/" + ROUTES.blogs);
      }
    });
  }
}
