import { Component, OnInit, Input } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {CategoresService} from "../../core/categores.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item:any;
  lat; lng; 
    constructor(
      private route: ActivatedRoute,
      private categorieService:CategoresService


    ) {

     }
  getImage(itemImage):string{
    return  'http://localhost:3000/img/'+itemImage;
  }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.categorieService.getDetaitItem(params['id'])
        .subscribe(item=>{

          this.item=item;
          this.lat=item[0]['lat'];
          this.lng=item[0]['lng'];
          
        })
    });
  }

}
