import { Component, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone:true,
    name:"addStar"
})

export class AddStarPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        console.log(args);
        
        return `⭐️ ${value} ⭐️`;
    }
}