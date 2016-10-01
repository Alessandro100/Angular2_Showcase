import {Component, EventEmitter} from "@angular/core";

import {Material} from "../Controls/Materials";

@Component({
    selector: 'my-material-add',
    templateUrl: "./_templates/material-add.template.html",
    outputs: ['new_material']
})

//Check what happen to event emitters, essentially input/output

export class MaterialAddComponent{
    material = new Material();
    new_material = new EventEmitter<Material>();

    constructor(){

    }

    addMaterial(){
        this.new_material.emit(this.material);
        this.material = new Material();
    }
}
