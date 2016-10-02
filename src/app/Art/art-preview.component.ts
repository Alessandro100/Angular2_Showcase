import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";


import {Art} from "../Controls/Art";
import {ArtManagerService} from "../Services/art-manager.service";
import {MaterialManagerService} from "../Services/material-manager.service";
import {Subscription} from "rxjs/Rx"

@Component({
    selector: 'my-preview',
    templateUrl: "./_templates/Art-preview.template.html"
})

export class ArtPreviewComponent implements OnDestroy, OnInit{

    private subscription: Subscription
    id:number
    selected_Art= new Art();
    data_on_init;//art service
    material_on_init: any[];//material service

    constructor(private _activatedroute:ActivatedRoute, private _Artmanager: ArtManagerService, private _router: Router, private _materialmanager: MaterialManagerService){
        this.subscription = _activatedroute.params.subscribe(//the _activatedroute can run without this.subscription
            (param: any) => this.ChangeData(param['id']) //look into => functionality
        );
    }

    ngOnInit(){
        this._Artmanager.getAllArts().subscribe(
            (data:any) => this.data_on_init = data//stores the db data locally for easy of manipulation and clarity of code
        );

        this._materialmanager.getAllMaterials().subscribe(
            (data:any) => this.material_on_init = this._Artmanager.Object_To_Array(data)//gets the materials initially when its open
        );
    }

    toShoppingList(){
        let new_array = this.material_on_init.concat(this.selected_Art.materials);
        this._materialmanager.saveAllMaterials(new_array).subscribe(
            (res) => console.log(res)
        );
        this._router.navigate(['/Material']);
    }

    ChangeData(param){
        this.id = param;
        this._Artmanager.getAllArts().subscribe(
            (data:any) => this.selected_Art = this._Artmanager.Object_To_Array(data)[this.id]
        );
    }

    onEdit(){
        this._router.navigate(['Arts/add', this.id]);
    }

    onDelete(){
        let key_name = this._Artmanager.getObjectID(this.data_on_init, this.id);
        this._Artmanager.deleteArt(key_name).subscribe(
            (res) => console.log(res)
        );
        this._router.navigate(['../']);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();//gets rid of the subscription when component closes to prevent memory leak
    }
}
