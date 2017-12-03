import { Component, OnInit, Input } from '@angular/core';

import { google } from "@agm/core/services/google-maps-types";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() Item: any;

  constructor() {
  
  
  }

  ngOnInit() {

    const nyc = new google.maps.LatLng(40.715, -74.002);
    const london = new google.maps.LatLng(51.506, -0.119);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(nyc, london);
    console.log(distance); 
    console.log("///////////////////////////////////////////"); 
  }
  getImage(itemImage):string{
    return  'http://localhost:3000/img/'+itemImage;
  }


}
