import {Material} from './Materials';

export class Art{
    title: string;
    img: string;
    content: string;
    materials: Material[];

    constructor(){
        this.title = "";
        this.img = "";
        this.content = "";
        this.materials = [];
    }
}