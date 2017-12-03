import { Component, OnInit } from '@angular/core';
import {CategoresService} from "../core/categores.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    display:boolean=false;
    categories:any;
  constructor(
    private categoresService:CategoresService
  ) { }

  ngOnInit() {
    this.categoresService.gelAllCategories().subscribe(categories => {
       this.categories=categories;
    });
  }
  searchDisplay(){
    if (this.display) {
      this.display = false;
    }
    else {
      this.display = true;
    }

  }

}
