import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import { Response } from "@angular/http";//added
import 'rxjs/Rx';

import {Art} from "../Controls/Art";
import {ArtManagerService} from "../Services/art-manager.service";

//home component
@Component({
    selector: 'my-display',
    templateUrl: "./_templates/art-display.template.html"
})

export class DisplayArtComponent implements OnInit{

    allArts: Art[];

    constructor(private _Artmanager: ArtManagerService, private _router: Router){
        
    }

    ngOnInit(){// going to have to change it because of life cycle and that it has to up date often 
        this._Artmanager.getAllArts()//subscribes/ recieves data from the database
            .subscribe(
                (data: Response) => (this.allArts = this._Artmanager.Object_To_Array(data))
            );
    }

    insert_dbData(data){//returns it in array format
        this.allArts = Object.keys(data).map(key => data[key]);
    }

    newArt(){//triggers when adds new Art
        this._router.navigate(['Arts/add', -1]);//works but it refreshs it... weird
    }

    Preview_Art(index: number){
        this._router.navigate(['Arts/preview', index]);
    }

}
