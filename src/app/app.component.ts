import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AlphaComp } from './alpha.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, FormsModule, NgFor, AlphaComp],
  template: `
  <div class="p-2">
  <input [(ngModel)]="name" class="border" placeholder="value input"/>
  <p>Value: {{ name }}</p>
  <div class="py-2 border my-2">
    <p *ngFor="let item of arr1">
  {{ item }}
  </p>  
  </div>

  <button (click)="setValue()" class="border p-1" >Set value</button>
  <button (click)="setArr()" class="border  p-1 ml-1" >Set value Arr</button>
  <div class="grid grid-cols-2 gap-2">
    <appo [childMessage]="name" (messageEvent)="handleMessage($event)"></appo>
    <alpha [alphaMessage]="name"></alpha>
  </div>
  </div>
`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = '';
  valueInput: string = "";
  arr1: any[] = []
  setValue() {
    this.name = 'Nancy';
  }
  setArr() {
    this.arr1 = [...this.arr1, Math.random().toFixed(2)]
  }
  setValueInput(event: any) {
    console.log(event);
    this.valueInput = event?.target?.value;
  }
  handleMessage(event: string) {
    console.log(event);

    this.name = event
  }
}
