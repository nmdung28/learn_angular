import { Component } from "@angular/core";
import { Logger } from "../logger.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { AlphaComp } from "../alpha.component";
import { HelloComponent } from "../hello/hello.component";
@Component({
    imports: [RouterOutlet, HelloComponent, CommonModule,FormsModule, AlphaComp],
    standalone:true,
    selector:"example",
    template:`<div class="p-2">
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
    </div>`,
    providers:[Logger]
})

export class ExamplePage{
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