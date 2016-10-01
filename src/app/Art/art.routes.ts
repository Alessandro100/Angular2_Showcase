import {Routes} from "@angular/router";

import {ArtAddComponent} from "./art-add.component";
import {ArtPreviewComponent} from "./art-preview.component";

export const ART_ROUTES: Routes = [
    {path: "add", component:ArtAddComponent},
    {path: "add/:id", component: ArtAddComponent},
    {path: "preview/:id", component: ArtPreviewComponent}
    //add a message component saying "please enter....recipe something"?
]