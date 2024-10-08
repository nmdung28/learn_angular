import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AlphaComp } from './alpha.component';

export const routes: Routes = [
    {
        path: 'hello',
        component: HelloComponent,
      },
      {
        path: 'alpha',
        component: AlphaComp,
      },
];
