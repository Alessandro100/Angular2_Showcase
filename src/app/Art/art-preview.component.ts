import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";


import {Art} from "../Controls/Art";
import {ArtManagerService} from "../Services/art-manager.service";
import {Subscription} from "rxjs/Rx"

@Component({
    selector: 'my-preview',
    templateUrl: "./_templates/Art-preview.template.html"
})

export class ArtPreviewComponent implements OnDestroy{

    private subscription: Subscription
    id:number
    selected_Art= new Art();

    constructor(private _activatedroute:ActivatedRoute, private _Artmanager: ArtManagerService, private _router: Router){
        this.subscription = _activatedroute.params.subscribe(//the _activatedroute can run without this.subscription
            (param: any) => this.ChangeData(param['id']) //look into => functionality
        );
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
        this._Artmanager.getAllArts().subscribe(
            (data:any) => this._Artmanager.deleteArt(this._Artmanager.getObjectID(data, this.id)).subscribe(
                (res) => console.log(res)
            )
        );
        this._router.navigate(['../']);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();//gets rid of the subscription when component closes to prevent memory leak
    }
}
