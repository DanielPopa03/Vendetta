import { Component } from '@angular/core';

import { Message } from '../../models/message';
import { AuthentificationService } from '../../services/AuthentificationService/authentification.service';

@Component({
  selector: 'app-welcome-content',
  templateUrl: './welcome-content.component.html',
  styleUrls: ['./welcome-content.component.css']
})
export class WelcomeContentComponent {

  content: string = "";

  constructor(private http: AuthentificationService) {}

  ngOnInit(): void {
    this.http.get("/messages").subscribe((data: Message) => this.content = data.message);
  }

}
