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
  <input [(ngModel)]="name" />

  <p>Value: {{ name }}</p>
  <p *ngFor="let item of arr1">
  {{ item }}
  </p>

  <button (click)="setValue()">Set value</button>
  <button (click)="setArr()">Set value Arr</button>
  <appo [childMessage]="name" (messageEvent)="handleMessage($event)"></appo>
  <alpha [alphaMessage]="name"></alpha>
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
