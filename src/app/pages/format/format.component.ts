import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AddStarPipe } from '../../untils/pipe_custom/add_start_pipe';

@Component({
  selector: 'app-format',
  standalone: true,
  templateUrl: './format.component.html',
  styleUrl: './format.component.scss',
  imports: [DecimalPipe, DatePipe, CurrencyPipe,PercentPipe,AddStarPipe],
})
export class FormatComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
