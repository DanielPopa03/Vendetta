import { Injectable } from '@angular/core';
import { AuthentificationService } from '../AuthentificationService/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TypeOfMarkerService {
 
  constructor(private authentificationService: AuthentificationService){}

  public findAllTypeOfMarker(){
    return this.authentificationService.get("/findAllTypeOfMarker");
  }

  public findTypeOfMarkerById(id:number){
    return this.authentificationService.get(`/findTypeOfMarkerById/${id}`);
  }
}
