import {Component, OnInit} from "@angular/core";

import {Material} from "../Controls/Materials";
import {MaterialManagerService} from "../Services/material-manager.service";

@Component({
    templateUrl: "./_templates/display-material.template.html"
})


//the only time this class access the db is when its open, and when it saves
export class DisplayMaterialComponent implements OnInit{

    materials_needed: Material[];//local var
    newMaterial = new Material();

    constructor(private _materialmanager: MaterialManagerService){

    }

    ngOnInit(){
        this._materialmanager.getAllMaterials().subscribe(
            (data: any) => this.materials_needed = this._materialmanager.Object_To_Array(data)
        )
    }

    addLocalMaterial(newMaterial: Material){
        this.materials_needed.push(newMaterial);
    }

    onSave(){
        //post data back
    }
}
