import { Injectable } from '@angular/core';
import { AuthentificationService } from '../AuthentificationService/authentification.service';
import { Comments } from 'src/app/models/comments';
import { Markers } from 'src/app/models/markers';

@Injectable({
  providedIn: 'root'
})
export class CommentsService{

  constructor(private authentificationService:AuthentificationService) {}

  findAllComments(){
    return this.authentificationService.get("/findAllComments")
  }

  findAllCommentsByMarker(idMarker: number){
    return this.authentificationService.get(`/findAllCommentsByMarker?idMarker=${idMarker}`)
  }
  saveComment(comment:Comments){
    return this.authentificationService.postPrivate("/saveComment", comment)
  }
}
