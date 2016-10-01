import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";


import {Recipe} from "../Controls/Recipe";
import {RecipeManagerService} from "../Services/recipe-manager.service";
import {Subscription} from "rxjs/Rx"

@Component({
    selector: 'my-preview',
    templateUrl: "./_templates/recipe-preview.template.html"
})

export class RecipePreviewComponent implements OnDestroy{

    private subscription: Subscription
    id:number
    selected_recipe= new Recipe();

    constructor(private _activatedroute:ActivatedRoute, private _recipemanager: RecipeManagerService, private _router: Router){
        this.subscription = _activatedroute.params.subscribe(//the _activatedroute can run without this.subscription
            (param: any) => this.ChangeData(param['id']) //look into => functionality
        );
    }

    ChangeData(param){
        this.id = param;
        this._recipemanager.getAllRecipes().subscribe(
            (data:any) => this.selected_recipe = this._recipemanager.Object_To_Array(data)[this.id]
        );
    }

    onEdit(){
        this._router.navigate(['recipes/add', this.id]);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();//gets rid of the subscription when component closes to prevent memory leak
    }
}
