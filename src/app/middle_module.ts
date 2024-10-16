// src/app/middle.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/reducer';
 

@NgModule({
  imports: [
    StoreModule.forRoot({ appState: blogReducer })
  ],
  exports: [
    StoreModule
  ]
})
export class MiddleModule { }
