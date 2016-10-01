import {Component} from "@angular/core";

import {Ingredient} from "../Controls/Ingredient";

@Component({
    selector: 'my-ingredient-add',
    templateUrl: "./_templates/ingredient-add.template.html"
})

//Check what happen to event emitters, essentially input/output

export class IngredientAddComponent{
    ingredient = new Ingredient();

    constructor(){

    }

    addIngredient(){
        //event emitter of some sort
    }
}
