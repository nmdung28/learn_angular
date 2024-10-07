import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "appo",
    template: `
    <div>
        alphaca
     <p> {{childMessage}}</p>  
    <button (click)="sendMessage()">click child</button>
    </div>`,
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