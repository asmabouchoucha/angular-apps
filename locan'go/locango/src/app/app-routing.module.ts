import {NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CategorieItemComponent } from "./categorie-item/categorie-item.component";
import { ItemDetailsComponent } from "./categorie-item/item-details/item-details.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes =[
    { path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'categorie/:id', component:CategorieItemComponent},
    {path:'categorie/:x/:id', component:ItemDetailsComponent},
    {path:'login', component:LoginComponent},



];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}
