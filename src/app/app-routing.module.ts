import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { DisplayRecipeComponent } from "./Recipes/recipe-display.component";
import { RecipeAddComponent } from "./Recipes/recipe-add.component";

//children router modules
import { RECIPE_ROUTES } from "./Recipes/recipe.routes";

//Sets the routing paths for the program
const routes: Routes = [
    {path: '', redirectTo: "/recipes", pathMatch: "full" },//sets the home directory to /recipes
    {path: 'recipes', component: DisplayRecipeComponent},//this is the home component
    {path: 'recipes', component: DisplayRecipeComponent, children: RECIPE_ROUTES}
    //add shopping list component after
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class StableReleaseRoutingModule { }

export const routing = RouterModule.forRoot(routes);
