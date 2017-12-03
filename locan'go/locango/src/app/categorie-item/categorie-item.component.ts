import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CategoresService } from "../core/categores.service";
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.css']
})
export class CategorieItemComponent implements OnInit {
  public distance;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public filter=100000;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  commerces: any;
  constructor(private route: ActivatedRoute,
    private categorieService: CategoresService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.categorieService.getListCommerce(params['id']).subscribe(commerces => {
        this.commerces = commerces;

      });

    });



    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();


    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {




      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          // this.zoom = 3;
        });
      });



    });



  }



  //Locate the user
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  calculateDistance(lat, lng) {
    
      const destination = new google.maps.LatLng(lat, lng);
    const currentPosition = new google.maps.LatLng(this.latitude, this.longitude);

    this.distance = (google.maps.geometry.spherical.computeDistanceBetween(destination, currentPosition));
    
  }
  initDistance(){
    this.distance=0; 
  }

  setFilter(value){
    this.filter=value.filter*1000;  
    console.log(this.filter);
   
  }

  
  calculateDistance2(lat,lng) {
      const destination = new google.maps.LatLng(lat, lng);
    const currentPosition = new google.maps.LatLng(this.latitude, this.longitude);

    var distance2 = (google.maps.geometry.spherical.computeDistanceBetween(destination, currentPosition));
  
        return distance2;

  }

  

}
