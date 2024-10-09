import { inject, Injectable } from "@angular/core";
import { AlphaComp } from "../pages/alpha/alpha.component";
import { AppComponent } from "../app.component";

@Injectable({
    providedIn: AlphaComp
})

export class Logger {
    log(msg: unknown) {
        console.log("log", msg);
    }
    error(msg: unknown) {
        console.log("error", msg);
    }
    warn(msg: unknown) {
        console.log("warn", msg);

    }
}