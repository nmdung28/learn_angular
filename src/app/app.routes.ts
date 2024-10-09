import { Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { AlphaComp } from './pages/alpha/alpha.component';
import { ExamplePage } from './pages/example/example.component';
import { ROUTES } from './const/router';
import { HomeComp } from './pages/home/home.component';
import { FormatComponent } from './pages/format/format.component';

export const routes: Routes = [
  {
    path: ROUTES.home,
    component: HomeComp,
  },
  {
    path: ROUTES.hello,
    component: HelloComponent,
  },
  {
    path: ROUTES.alpha,
    component: AlphaComp,
  },
  {
    path: ROUTES.example,
    component: ExamplePage,
  },
  {
    path: ROUTES.format,
    component: FormatComponent,
  },

];
