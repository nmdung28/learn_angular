import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core'

@Component({
    selector: "alpha",
    template: `
    <div>
    <p class="mb-2">Alphaca</p>  
    <p> {{message}}</p>   
    <button (click)="reSet()" class="border p-1" >Reset</button>
    </div>
    `,
      standalone: true,
})

export class AlphaComp implements OnChanges {
    @Input() alphaMessage?: string;
    message?: string = this.alphaMessage;
    constructor() {

    }
    reSet() {
        this.message = "Reset default"
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("changes",changes);
        this.message = changes['alphaMessage'].currentValue
    }
}
 