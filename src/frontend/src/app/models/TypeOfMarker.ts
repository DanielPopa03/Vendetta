export class TypeOfMarker {
    constructor(
        private name: string,
        private pathOfPicture:string,
        private description: string,
        private id?:number
    ){}

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
}