import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Art} from "../Controls/Art";

@Injectable()
//this entire service has to work straight from the db

export class ArtManagerService{
    allArts: Art[];

    constructor(private _http: Http){

    }

    deleteArt(chosen){//works, weird loading scheme (need to work with asynchronous things)
        let url = "https://angular2-showcase-e0e95.firebaseio.com/Arts/" + chosen + ".json"; 
        return this._http.delete(url)
            .map((Art: Response) => Art.json());
    }

    setEditArt(chosen, newEdit: Art){
        const body = JSON.stringify(newEdit);
        let url = "https://angular2-showcase-e0e95.firebaseio.com/Arts/" + chosen + ".json";
        return this._http.put(url, body)
            .map((res:Response) => res.json());
    }

    addNewArt(new_Art: Art){
        console.log(new_Art);
        const body = JSON.stringify(new_Art);//turns data in db ready
        return this._http.post('https://angular2-showcase-e0e95.firebaseio.com/Arts.json', body)
            .map((Art: Response) => Art.json());//sends data
        //navigate back?
    }
    
    getAllArts(){
        return this._http.get('https://angular2-showcase-e0e95.firebaseio.com/Arts.json')//gets the data
            .map((response: Response) => response.json());//transforms it into js objects
    }

    //sep

    Object_To_Array(data){
        console.log(data);
        if(data == null){
            return [];
        }
        return Object.keys(data).map(key => data[key]);
    }

    getObjectID(data, index:number){//retrieves the way firebase encrypts data
        let holder =[];
        for(var name in data) {
            holder.push(name);
        }
        return holder[index];
    }

}