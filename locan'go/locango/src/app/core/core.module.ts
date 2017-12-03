import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {CategoresService} from './categores.service';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    CommonModule,
    HttpModule

  ],
  declarations: [],
  providers : [CategoresService]
})
export class CoreModule { }
