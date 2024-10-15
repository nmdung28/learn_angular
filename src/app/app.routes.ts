import { Routes } from '@angular/router';
import { HelloComponent } from './pages/hello/hello.component';
import { AlphaComp } from './pages/alpha/alpha.component';
import { ExamplePage } from './pages/example/example.component';
import { ROUTES } from './const/router';
import { HomeComp } from './pages/home/home.component';
import { FormatComponent } from './pages/format/format.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogsDetailComponent } from './pages/blogs-detail/blogs-detail.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AdminComponent } from './pages/admin/admin.component';

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
  
  {
    path: ROUTES.blogs,
    component: BlogsComponent,
  },
  {
    path: ROUTES.blogsId,
    component: BlogsDetailComponent,
  },
  {
    path: ROUTES.categoriesId,
    component: CategoriesComponent,
  },
  {
    path: ROUTES.admin,
    component: AdminComponent,
  },
  {
    path:"**",
    redirectTo: ROUTES.home,
    component:HomeComp
  },
];
