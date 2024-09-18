import { Injectable } from '@angular/core';
import { AuthentificationService } from '../AuthentificationService/authentification.service';
import { ActivatedRoute } from '@angular/router';
import { Markers } from 'src/app/models/markers';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {

  constructor(private authentificationService: AuthentificationService, private route: ActivatedRoute) { }

  findAllMarkers(){
    return this.authentificationService.get("/findAllMarkers");
  }

  findMarkerByTitle(title:string){
    return this.authentificationService.get(`/findMarkerByTitle?title=${title}`);
  }

  getAllTitles(){
    return this.authentificationService.get("/getAllTitles");
  }

  saveMarker(marker: Markers){
    
    return this.authentificationService.postPrivate("/saveMarker", marker);
  }

  
}
