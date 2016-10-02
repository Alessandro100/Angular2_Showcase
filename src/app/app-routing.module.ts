import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { DisplayArtComponent } from "./Art/art-display.component";
import { ArtAddComponent } from "./Art/art-add.component";
import { DisplayMaterialComponent } from './MaterialList/display-material.component';

//children router modules
import { ART_ROUTES } from "./Art/art.routes";

//Sets the routing paths for the program
const routes: Routes = [//level one routing
    {path: '', redirectTo: "/Arts", pathMatch: "full" },//sets the home directory to /Arts
    {path: 'Arts', component: DisplayArtComponent, resolve: {}},//this is the home component
    {path: 'Arts', component: DisplayArtComponent, children: ART_ROUTES},
    {path: 'Material', component: DisplayMaterialComponent}
    //add shopping list component after
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class StableReleaseRoutingModule { }

export const routing = RouterModule.forRoot(routes);
