import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule} from '@angular/google-maps';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { WelcomeContentComponent } from './components/welcome-content/welcome-content.component';
import { ProtectedContentComponent } from './components/protected-content/protected-content.component';
import { MapComponent, DialogNewMarkerComponent, DialogInfoMarkerComponent } from './components/map/map.component';
import { VendetaNavbarComponent } from './components/vendeta-navbar/vendeta-navbar.component';





const routes: Routes = [
  { path: '', component: MapComponent},
  { path: 'op', component:VendetaNavbarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeContentComponent,
    ProtectedContentComponent,
    MapComponent,
    VendetaNavbarComponent,
    DialogNewMarkerComponent,
    DialogInfoMarkerComponent,
  ],
  imports: [
    BrowserAnimationsModule, // required for ToastrModule
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule, 
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
