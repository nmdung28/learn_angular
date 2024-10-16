export interface IBlogItem{
    id:string,
    title?:string,
    summary?:string,
    image?:any,
    comment?:IComment[],
    author?:string,
    time?:Date,
    categories?:string,
    content?:string
}

export interface IComment{
    id:string,
    name:string,
    content:string,
    time?:Date,
    avatar?:any,
    level?:number
}