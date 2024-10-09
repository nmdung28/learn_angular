import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { AlphaComp } from './alpha.component';
import { Logger } from './logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, CommonModule,FormsModule, AlphaComp],
  template: `
  <div class="p-2">
  <input [(ngModel)]="name" class="border" placeholder="value input"/>
  <p>Value: {{ name }}</p>
  <div class="py-2 border my-2">
    <p *ngFor="let item of arr1">
      @if (+item*100 %2 ===0){
        <span>Chẵn  {{ item }}</span>
      }@else {
        <span>lẻ  {{ item }}</span>
      }
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
  styleUrl: './app.component.scss',
  providers:[Logger]
})
export class AppComponent {
  name: string = '';
  valueInput: string = "";
  arr1: any[] = [];
  constructor( private logger:Logger){}
  setValue() {
    this.name = 'Nancy';
  }
  setArr() {
    this.arr1 = [...this.arr1, Math.random().toFixed(2)]
    this.logger.error(this.arr1)
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
