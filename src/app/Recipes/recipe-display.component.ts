import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import { Response } from "@angular/http";//added
import 'rxjs/Rx';

import {Recipe} from "../Controls/Recipe";
import {RecipeManagerService} from "../Services/recipe-manager.service";

//home component
@Component({
    selector: 'my-display',
    templateUrl: "./_templates/recipe-display.template.html"
})

export class DisplayRecipeComponent implements OnInit{

    allRecipes: Recipe[];

    constructor(private _recipemanager: RecipeManagerService, private _router: Router){
        
    }

    ngOnInit(){// going to have to change it because of life cycle and that it has to up date often 
        this._recipemanager.getAllRecipes()//subscribes/ recieves data from the database
            .subscribe(
                (data: Response) => (this.allRecipes = this._recipemanager.Object_To_Array(data))
            );
    }

    insert_dbData(data){//returns it in array format
        this.allRecipes = Object.keys(data).map(key => data[key]);
    }

    newRecipe(){//triggers when adds new recipe
        this._router.navigate(['recipes/add', -1]);//works but it refreshs it... weird
    }

    Preview_Recipe(index: number){
        this._router.navigate(['recipes/preview', index]);
    }

}
