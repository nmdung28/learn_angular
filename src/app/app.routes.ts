import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AlphaComp } from './alpha.component';
import { ExamplePage } from './example/example.component';
import { ROUTES } from './const/router';

export const routes: Routes = [
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
        component: ExamplePage,
      },
      
];
