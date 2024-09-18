import { Markers } from "./markers";

export class Comments{
    constructor(
        private text: string,
        private emailOfCreator:string,
        private marker:Markers,
        private id?:number
        
    ){}

    getText(){
        return this.text;
    }

    getEmailOfCreator(){
        return this.emailOfCreator;
    }
}