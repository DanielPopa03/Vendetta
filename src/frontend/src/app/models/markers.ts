import { TypeOfMarker } from './TypeOfMarker';
export class Markers {
    constructor
    (
     private emailOfCreator: string,
     private description: string,
     private title: string,
     private lat: number,
     private lng: number,
     private typeOfMarker: TypeOfMarker,
     private id?: number, private creationDate?: string,
    ) {
        this.emailOfCreator = emailOfCreator;
        
        this.title =  title
        this.lat = lat
        this.lng = lng
        this.typeOfMarker = typeOfMarker
        this.id = id
        let date = new Date()
        this.creationDate = (date).toISOString()
    }

}