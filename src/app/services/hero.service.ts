import { Hero } from "../type/hero";
import { Logger } from "./logger.service";

export class HeroService{
    private heroes:Hero[]= [];
    constructor(private logger:Logger){

    }
    
}

