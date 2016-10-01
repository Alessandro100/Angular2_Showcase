import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Recipe} from "../Controls/Recipe";

@Injectable()
//this entire service has to work straight from the db

export class RecipeManagerService{
    allRecipes: Recipe[];

    constructor(private _http: Http){

    }

    deleteRecipe(index: number){
        this.allRecipes.splice(index,1);
    }

    addNewRecipe(new_recipe: Recipe){
        console.log(new_recipe);
        const body = JSON.stringify(new_recipe);//turns data in db ready
        return this._http.post('https://angular2-showcase-e0e95.firebaseio.com/recipes.json', body)
            .map((recipe: Response) => recipe.json());//sends data
        //navigate back?
    }

    setEditRecipe(new_recipe: Recipe, index: number){
       /* console.log("this is a test: ");//oh fuckerinos
        this._http.get("https://angular2-showcase-e0e95.firebaseio.com/recipes/-KSxtAQ3zlLyYDiRvEaj.json").subscribe(
            (data:any) => console.log(data)
        );*/

        //real shit

        /*
        const body = JSON.stringify(new_recipe);//turns data into db ready
        let keys;

        this.getAllRecipes().subscribe(
            (data:any) => keys = Object.keys(data)
        );
        
        let chosen = keys[index];
        console.log("this is chosen: " + chosen);
        let url = "https://angular2-showcase-e0e95.firebaseio.com/recipes/"+chosen+".json";
        console.log("this is the url: " + url);

        return this._http.post(url, body)
            .map((recipe: Response) => recipe.json());*/
    }

    getRecipe(index: number){
        return this.allRecipes[index];
    }

    getAllRecipes(){
        return this._http.get('https://angular2-showcase-e0e95.firebaseio.com/recipes.json')//gets the data
            .map((response: Response) => response.json());//transforms it into js objects
    }

    //sep

    Object_To_Array(data){
        return Object.keys(data).map(key => data[key]);
    }

}