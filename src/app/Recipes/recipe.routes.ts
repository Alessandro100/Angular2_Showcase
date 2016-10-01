import {Routes} from "@angular/router";

import {RecipeAddComponent} from "./recipe-add.component";
import {RecipePreviewComponent} from "./recipe-preview.component";

export const RECIPE_ROUTES: Routes = [
    {path: "add", component:RecipeAddComponent},
    {path: "add/:id", component: RecipeAddComponent},
    {path: "preview/:id", component: RecipePreviewComponent}
    //add a message component saying "please enter....recipe something"?
]