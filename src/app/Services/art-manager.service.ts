import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Art} from "../Controls/Art";

@Injectable()
//this entire service has to work straight from the db

export class ArtManagerService{
    allArts: Art[];

    constructor(private _http: Http){

    }

    deleteArt(index: number){
        this.allArts.splice(index,1);
    }

    addNewArt(new_Art: Art){
        console.log(new_Art);
        const body = JSON.stringify(new_Art);//turns data in db ready
        return this._http.post('https://angular2-showcase-e0e95.firebaseio.com/Arts.json', body)
            .map((Art: Response) => Art.json());//sends data
        //navigate back?
    }

    setEditArt(new_Art: Art, index: number){
       /* console.log("this is a test: ");//oh fuckerinos
        this._http.get("https://angular2-showcase-e0e95.firebaseio.com/Arts/-KSxtAQ3zlLyYDiRvEaj.json").subscribe(
            (data:any) => console.log(data)
        );*/

        //real shit

        /*
        const body = JSON.stringify(new_Art);//turns data into db ready
        let keys;

        this.getAllArts().subscribe(
            (data:any) => keys = Object.keys(data)
        );
        
        let chosen = keys[index];
        console.log("this is chosen: " + chosen);
        let url = "https://angular2-showcase-e0e95.firebaseio.com/Arts/"+chosen+".json";
        console.log("this is the url: " + url);

        return this._http.post(url, body)
            .map((Art: Response) => Art.json());*/
    }

    getArt(index: number){
        return this.allArts[index];
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

}