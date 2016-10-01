import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app-routing.module";

//Recipe Components
import {DisplayRecipeComponent} from './Recipes/recipe-display.component';
import {RecipeAddComponent} from './Recipes/recipe-add.component';
import {IngredientAddComponent} from './Recipes/ingredient-add.component';
import {RecipePreviewComponent} from './Recipes/recipe-preview.component';

//Controls
import {Recipe} from './Controls/Recipe';

//Services
import {RecipeManagerService} from './Services/recipe-manager.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayRecipeComponent,
    RecipeAddComponent,
    IngredientAddComponent,
    RecipePreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RecipeManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
