import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';

import {Art} from "../Controls/Art";
import {ArtManagerService} from "../Services/art-manager.service";
import {MaterialAddComponent} from "./material-add.component";

import {Material} from "../Controls/Materials";

/* THIS IS FOR NEW ArtS AND EDITING EXISTING ONES */ 

@Component({
    selector: 'my-art-add',
    templateUrl: "./_templates/art-add.template.html"
})

export class ArtAddComponent implements OnInit{
    isNew = true;
    index_select: number;
    Art = new Art(); //start off with a blank Art and adds if its an edit

    constructor(private _Artmanager: ArtManagerService, private _router: Router, private _activatedroute: ActivatedRoute){
        _activatedroute.params.subscribe(
            (param:any) => this.ChangeData(param['id'])
        )
    }

    addMaterial(newMaterial: Material){
        this.Art.materials.push(newMaterial);
    }

    deleteMaterial(index: number){
        this.Art.materials.splice(index, 1);
    }

    ChangeData(param){
        this.index_select = param;
        if(this.index_select > -1){//go into editing mode
            this._Artmanager.getAllArts().subscribe(
                (data:any) => this.Art = this._Artmanager.Object_To_Array(data)[this.index_select]
            );
            this.isNew = false;
        }
        //if it doesnt go through, the Art is default as new
    }

    ngOnInit(){
        
    }

    OnCancel(){
        this._router.navigate(['../']);
    }

    OnSubmit(){ 
        console.log("passing");
        if(this.isNew){
            this._Artmanager.addNewArt(this.Art).subscribe(
            error => console.log(error));
        }else{
            /*this._Artmanager.setEditArt(this.Art, this.index_select).subscribe(
                error => console.log(error)
            ); DOESNT WORK GET BACK TO IT*/
        }
        this._router.navigate(['../']);
    }


}
