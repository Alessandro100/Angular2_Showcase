import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';

import {Recipe} from "../Controls/Recipe";
import {RecipeManagerService} from "../Services/recipe-manager.service";
import {IngredientAddComponent} from "./ingredient-add.component";

/* THIS IS FOR NEW RECIPES AND EDITING EXISTING ONES */ 

@Component({
    selector: 'my-recipe-add',
    templateUrl: "./_templates/recipe-add.template.html"
})

export class RecipeAddComponent implements OnInit{
    isNew = true;
    index_select: number;
    recipe = new Recipe(); //start off with a blank recipe and adds if its an edit

    constructor(private _recipemanager: RecipeManagerService, private _router: Router, private _activatedroute: ActivatedRoute){
        _activatedroute.params.subscribe(
            (param:any) => this.ChangeData(param['id'])
        )
    }

    ChangeData(param){
        this.index_select = param;
        if(this.index_select > -1){//go into editing mode
            this._recipemanager.getAllRecipes().subscribe(
                (data:any) => this.recipe = this._recipemanager.Object_To_Array(data)[this.index_select]
            );
            this.isNew = false;
        }
        //if it doesnt go through, the recipe is default as new
    }

    ngOnInit(){
        
    }

    OnCancel(){
        this._router.navigate(['../']);
    }

    OnSubmit(){
        if(this.isNew){
            this._recipemanager.addNewRecipe(this.recipe).subscribe(
            error => console.log(error));
        }else{
            /*this._recipemanager.setEditRecipe(this.recipe, this.index_select).subscribe(
                error => console.log(error)
            ); DOESNT WORK GET BACK TO IT*/
        }
        this._router.navigate(['../']);
    }


}
