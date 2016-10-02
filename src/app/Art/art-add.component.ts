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

    data_on_init;
    isNew = true;
    index_select: number;
    Art = new Art(); //start off with a blank Art and adds if its an edit

    constructor(private _Artmanager: ArtManagerService, private _router: Router, private _activatedroute: ActivatedRoute){
        _activatedroute.params.subscribe(
            (param:any) => this.ChangeData(param['id'])
        )
    }

    addMaterial(newMaterial: Material){
        if(this.Art.materials == null){
            this.Art.materials = [newMaterial];
        }else{
            this.Art.materials.push(newMaterial);
        }
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
        this._Artmanager.getAllArts().subscribe(
            (data:any) => this.data_on_init = data
        );
    }

    OnCancel(){
        this._router.navigate(['../']);
    }

    OnSubmit(){ 
        if(this.isNew){//save when its new
            this._Artmanager.addNewArt(this.Art).subscribe(
            error => console.log(error));
        }else{//save when its an edit
            let key_name = this._Artmanager.getObjectID(this.data_on_init, this.index_select);//gets the encrypted firebase name
            this._Artmanager.setEditArt(key_name, this.Art).subscribe(
                (res) => console.log(res)
            );
        }
        this._router.navigate(['../']);
    }


}
