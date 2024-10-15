import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
    standalone:true,
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value?: Date, ...args: unknown[]): unknown {
    return moment(value).fromNow(); // this line you have to edit
  }

}