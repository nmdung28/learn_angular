import { Component, Input } from "@angular/core";
import { ICategories } from "../../../types/categories";
import { Categories } from "../../../untils/draft_data/categories";

@Component({
    selector: "categories_item_blog",
    standalone:true,
    template: `<p>{{item?.name}}</p>
    `
})

export class CatgoriesItemBlog {
    @Input() id: string|undefined = "";
    item: ICategories | undefined = { id: "", name: "" }
    constructor() {
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.item = Categories.find(i => i.id === this.id)
    }
}