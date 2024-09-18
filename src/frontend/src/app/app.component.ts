import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthentificationService} from './services/AuthentificationService/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static isUserLogged: boolean = false;


  constructor(private http: AuthentificationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.queryParams
      .subscribe(params => {
        if (params["code"] !== undefined) {
          this.http.getToken(params["code"]).subscribe(result => {
            console.log(result)
            if (result === true) {
              AppComponent.isUserLogged = true;
            } else {
              AppComponent.isUserLogged = false;
            }
          });
        }
      }
    );
  }

}
