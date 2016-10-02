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

    isNew = true;
    index_select = -1;

    constructor(private _materialmanager: MaterialManagerService){

    }

    ngOnInit(){
        this._materialmanager.getAllMaterials().subscribe(
            (data: any) => this.materials_needed = this._materialmanager.Object_To_Array(data)
        )
    }

    addLocalMaterial(){//for new materials
        let holder = Object.assign({}, this.newMaterial);
        this.materials_needed.push(holder);
        this.newMaterial = new Material();
    }

    editLocalMaterial(index: number){//initializes the editing process
        this.index_select = index;
        this.isNew = false;
        this.newMaterial = Object.assign({},this.materials_needed[index]);//clones a holder 
    }

    deleteLocalMaterial(){
        this.materials_needed.splice(this.index_select, 1);
        this.isNew = true;
        this.newMaterial = new Material();
    }

    saveLocalMaterial(){//saves the edit
        this.materials_needed[this.index_select] = this.newMaterial;
        this.isNew = true;
        this.newMaterial = new Material();
    }

    onCancel(){
        this.isNew = true;
        this.newMaterial = new Material();
    }

    onSave(){//saves to database
        this._materialmanager.saveAllMaterials(this.materials_needed).subscribe(
            (res:any) => console.log(res)
        );
    }
}
