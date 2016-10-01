import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Art} from "../Controls/Art";
import {Material} from "../Controls/Materials";

@Injectable()

export class MaterialManagerService{

    constructor(private _http:Http){

    }

    getAllMaterials(){
        return this._http.get('https://angular2-showcase-e0e95.firebaseio.com/User_Material.json')//gets the data
            .map((response: Response) => response.json());//transforms it into js objects
    }

    saveAllMaterials(materialArray: Material[]){
        //firebase replace function... this is going to be the same for the edit 
        if(materialArray.length == 0){
            //this assumes the user doesnt need materials => empty repo
        }else{
            //replace the current repo with this one
        }
    }

    Object_To_Array(data){
        console.log(data);
        if(data == null){
            return [];
        }
        return Object.keys(data).map(key => data[key]);
    }
}