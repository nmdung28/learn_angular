import { Logger } from "./logger.service";
import { Hero } from "./type/hero";

export class HeroService{
    private heroes:Hero[]= [];
    constructor(private logger:Logger){

    }
    
}

