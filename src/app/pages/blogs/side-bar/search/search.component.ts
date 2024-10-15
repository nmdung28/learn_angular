import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-search',
  standalone:true,
  imports: [
    NzInputModule,
    FormsModule
  ],
  templateUrl:'search.component.html'
})
export class SearchComponent {
  @Input() value?: string;  
  @Output() emitEvent = new EventEmitter<string>();
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.log(changes);
  // }

  onChangeInput(event:any){
    this.emitEvent.emit(event?.target?.value)
  }
}
