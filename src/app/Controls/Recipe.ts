import {Ingredient} from './Ingredient';

export class Recipe{
    title: string;
    img: string;
    content: string;
    ingredients: Ingredient[];

    constructor(){
        this.title = "";
        this.img = "";
        this.content = "";
        this.ingredients = [];
    }
}