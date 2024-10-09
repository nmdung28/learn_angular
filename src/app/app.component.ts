import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AlphaComp } from './pages/alpha/alpha.component';
import { HelloComponent } from './pages/hello/hello.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HeaderComponent ],
  template: `
  <app-header/>
    <router-outlet />
`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
