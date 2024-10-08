import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core'
import { RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterOutlet],
    selector: "alpha",
    template: `
        <router-outlet />
    <div>
    <p class="mb-2">Alphaca</p>  
    <p> {{message}}</p>   
    <button (click)="reSet()" class="border p-1" >Reset</button>
    </div>
    <a href="/">Home</a>
    <a href="/hello">Nav to Hello</a>
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
 