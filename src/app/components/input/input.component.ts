import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() formControlName!: string;
  @Input() placeholder?: string;
  @Input() value?: string | number;
  @Input() name?: string ;
  @Input() onChange!: (arg: any) => void;
  constructor() {
    this.placeholder = "Enter text here"
  }
}
