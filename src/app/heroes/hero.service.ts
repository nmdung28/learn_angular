import { Injectable } from '@angular/core';
import { Logger } from '../logger.service';

@Injectable({
  providedIn: 'any'
})
export class HeroService {

  constructor(private logger:Logger) { }
  getHeroes(){
    this.logger.log("log o day")
    return ["1","2","3"]
  }
}
