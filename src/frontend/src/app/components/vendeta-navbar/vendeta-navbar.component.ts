import { Component, OnInit } from '@angular/core';
import { AuthentificationService} from 'src/app/services/AuthentificationService/authentification.service';

@Component({
  selector: 'app-vendeta-navbar',
  templateUrl: './vendeta-navbar.component.html',
  styleUrls: ['./vendeta-navbar.component.css' ]
})
export class VendetaNavbarComponent implements OnInit {
  
  loginUrl:string = "";
  loged: boolean = false;

  constructor(private http: AuthentificationService){}

  ngOnInit(): void {
    this.http.getAuthUrl().subscribe((data: any) => {console.log(data)
      this.loginUrl = data.authURL});
   
  }

}
