import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    imports: [RouterOutlet],
    selector: "appo",
    template: `
    <div>
      <p class="mb-2">Hello</p>  
     <p> {{childMessage}}</p>

    <button (click)="sendMessage()" class="border p-1" >click child</button>
    </div>
    <a href="/">Home</a>
    <a href="/alpha">Nav to Alpha</a>
    <router-outlet />
    `,
    standalone: true,
})

export class HelloComponent implements OnInit {
    @Input() childMessage?: string;
    @Output() messageEvent = new EventEmitter<string>()
    constructor() { }   
    ngOnInit() {
    }
    sendMessage() {
        this.messageEvent.emit(this.childMessage + Math.random().toFixed(2))
    }
};