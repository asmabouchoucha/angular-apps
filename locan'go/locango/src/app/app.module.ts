import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { CategorieItemComponent } from './categorie-item/categorie-item.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './categorie-item/item/item.component';
import { ItemDetailsComponent } from './categorie-item/item-details/item-details.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {InfiniteScrollModule} from "angular2-infinite-scroll";
import {CoreModule} from "./core/core.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategorieItemComponent,
    HeaderComponent,
    ItemComponent,
    ItemDetailsComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    InfiniteScrollModule,
    CoreModule,
    AgmCoreModule.forRoot({

      apiKey: 'AIzaSyBxGdjUslT9KAtasWDjRl6gazX2N8KNHyw',
      libraries: ["places","geometry"]
     

    }),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);

