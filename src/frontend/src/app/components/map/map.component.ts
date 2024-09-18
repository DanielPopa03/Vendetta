import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Markers } from 'src/app/models/markers';
import { TypeOfMarker } from 'src/app/models/TypeOfMarker';
import { AuthentificationService } from 'src/app/services/AuthentificationService/authentification.service';
import { MarkersService } from 'src/app/services/MarkersService/markers.service';
import { TypeOfMarkerService } from 'src/app/services/TypeOfMarkerService/type-of-marker-service.service';
import { catchError, elementAt, forkJoin, of } from 'rxjs';
import { CommentsService } from 'src/app/services/CommentsService/comments-service.service';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  
  @ViewChild('mapContainer') mapContainer: ElementRef | undefined;
  constructor(private typeOfMarkerService:TypeOfMarkerService, private markersService: MarkersService,
     private toastr: ToastrService, private authentificationService:AuthentificationService,
     private dialog: MatDialog,
     private ngZone: NgZone){}
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }


  ngAfterViewInit() {
    const mapContainer = this.mapContainer?.nativeElement; // Optional chaining
    if (mapContainer) {
      const map = new google.maps.Map(mapContainer, {
        center: { lat: 44.439663, lng: 26.096306 }, // Bucharest coordinates
        zoom: 11,
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: false,
        mapId: "Vendetta"
      });
      this.markersService.findAllMarkers().subscribe((data:any) =>{
        
        let allMarkers:any[] = data
        allMarkers.forEach((element:any)=>{
          
          const beachFlagImg = document.createElement('img');
            beachFlagImg.src = element.typeOfMarker.pathOfPicture;
            const marker = new google.maps.marker.AdvancedMarkerElement({
              position: { lat: element.lat, lng: element.lng},
              map,
              title: element.title,
              content: beachFlagImg,
            });
            marker.addListener("click", () => {
              map.setZoom(8);
              map.setCenter(marker.position as google.maps.LatLng);
              this.ngZone.run(() => {
                const dialogRef = this.dialog.open( DialogInfoMarkerComponent,
                  {width: '350px', height:'400px',
                  data: { marker: marker }  
                  }
                );
            
                dialogRef.afterClosed().subscribe(result => {
                  console.log('The dialog was closed');
                  console.log(result); // The form data, if the form was submitted
                });
              })
            });
        })
      });
      console.log(this.markersService.findAllMarkers())
      
      map.addListener("click", (e:google.maps.MapMouseEvent) => {
        this.ngZone.run(() => {
        const dialogRef = this.dialog.open(DialogNewMarkerComponent, {
      
          width: '250px',
          
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
          if (e.latLng) {
            const lat = e.latLng.lat();
            const lng = e.latLng.lng();
            console.log(`Latitude: ${lat}, Longitude: ${lng}`);
            
            
          
          this.authentificationService.getUserEmail().subscribe((email:any)=>{
            
            if(email === undefined) throw("The email couldn't not be retrieved")
              this.typeOfMarkerService.findTypeOfMarkerById(result.typesOfMarkers).subscribe((typeOfMarker :any)=>{
                  
                  const flagImg = document.createElement('img');
                  flagImg.src = typeOfMarker.pathOfPicture;
                  let newMarker = new google.maps.marker.AdvancedMarkerElement({
                      position: { lat, lng },
                      map: map,
                      content: flagImg
                  });
                  console.log(email.message, result.description,result.name, lat, lng, typeOfMarker)
                  let saveMarker = new Markers(email.message, result.description,result.name, lat, lng, typeOfMarker)
                  try{
                    this.markersService.saveMarker(saveMarker);
                    this.showSuccess()
                  }catch(err:any){
                    this.showError();
                  }
                });
          })
          }
        });
        
      })
    })  
      
    } else {
      // Handle the case where mapContainer is not available
      console.error("Map container not found!");
    }
  }

 
  



  openDialog(): void {
    const dialogRef = this.dialog.open( DialogInfoMarkerComponent,
      {width: '350px', height:'400px',
      data: { lat: 0, lng: 0 }  
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result); // The form data, if the form was submitted
    });
  }

  

}



@Component({
  selector: 'app-dialog-new-marker',
  templateUrl: './dialog-new-marker.component.html',
  styleUrls: ['./dialog-new-marker.component.css']
})
export class DialogNewMarkerComponent implements OnInit {
  markerForm: FormGroup;
  isLoading: boolean = true;
  typesOfMarkers: any[] = []
  titles:String[] = []

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogNewMarkerComponent>,
    private typeOfMarkerService: TypeOfMarkerService,
    private markersService:MarkersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.markerForm = this.fb.group({
      name:  ['', [Validators.required, (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
       
        console.log(value, typeof(value), this.titles[0])
        
        if (this.titles && this.titles.some(option => value === option)) {
          console.log(1)
          return { 'titleIsTheSame': { value: value } };
        }
        return null;
      }]],
      description:['', Validators.required],
      typesOfMarkers: [null, Validators.required] 
    });
    this.ngOnInit();
  }
  ngOnChanges(){
    console.log('DialogNewMarkerComponent initialized with data:', this.data);
  }

  ngOnInit(): void {
    console.log('DialogNewMarkerComponent initialized with data:', this.data);
    console.log("cawdawd")
    forkJoin({
      typesOfMarkers: this.typeOfMarkerService.findAllTypeOfMarker().pipe(catchError(() => of([]))),
      titles:this.markersService.getAllTitles().pipe(catchError(() => of([])))
    }).subscribe(({typesOfMarkers, titles}) => {
      console.log("bai")
      console.log(typesOfMarkers)
      console.log(titles)
      this.typesOfMarkers = typesOfMarkers as any[];
      this.titles = titles as any[];
      this.isLoading = false;
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.markerForm.get(controlName);
    return control ? control.hasError(errorName) : false;
  }

  onContinue(): void {
    if (this.markerForm.valid) {
      // Handle form submission
      console.log(this.markerForm.value);
      this.dialogRef.close(this.markerForm.value); // Close the dialog and pass the form data
    }
  }
}




@Component({
  selector: 'app-dialog-info-marker',
  templateUrl: './dialog-info-marker.component.html',
  styleUrls: ['./dialog-info-marker.component.css']
})
export class DialogInfoMarkerComponent implements OnInit {
  comments:any[] =[]

  newCommentText: string = '';
  

  constructor(public dialogRef: MatDialogRef<DialogInfoMarkerComponent>,
    private authentificationService:AuthentificationService,
    private markersService:MarkersService,
    private commentsService:CommentsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  public title:string = '';
  public description:string = '';
  private marker:Markers|undefined;

  ngOnInit(): void {
    this.markersService.findMarkerByTitle(this.data.marker.title).subscribe((marker:any)=>{
      
      this.title = marker.title
      this.description = marker.description
      
      this.marker = marker
      
        this.commentsService.findAllCommentsByMarker(marker.id).subscribe((comments:any)=>{
          console.log(comments)
          comments.forEach((comment:Comments)=>{
            this.comments.push(comment)
          })
      })
      
      
    })

    
  }

  addComment() {

    console.log(this.data.marker.title)
    try{
      this.authentificationService.getUserEmail().subscribe((emailOfCreator:any)=>{
      let comment;
      if(this.marker !== undefined){
        comment = new Comments(this.newCommentText,emailOfCreator.message,this.marker)
        this.comments.push(comment);
        this.commentsService.saveComment(comment);
        console.log(comment)
        this.newCommentText = '';
      }
      
      })
    }catch(err:any){
      console.log("You must sign in, before posting a comment")
    }

    
    console.log(this.comments)
    
  }
}
