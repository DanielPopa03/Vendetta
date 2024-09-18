import { Component } from '@angular/core';

import { Message } from '../../models/message';
import { AuthentificationService } from '../../services/AuthentificationService/authentification.service';

@Component({
  selector: 'app-protected-content',
  templateUrl: './protected-content.component.html',
  styleUrls: ['./protected-content.component.css']
})
export class ProtectedContentComponent {

  content: string = "";

  constructor(private http: AuthentificationService) {}

  ngOnInit(): void {
    try{
    this.http.getPrivate("/messages").subscribe((data: Message) => {
      console.log(data)
      this.content = data.message

    });
  }catch(error){
    console.log("HELLO " + error);
  }
  
  }
}
