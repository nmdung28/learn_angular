import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core'

@Component({
    selector: "alpha",
    template: `
    <div>
    <p> {{message}}</p>   
    <button (click)="reSet()">Reset</button>
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
 