import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app-routing.module";

//Art Components
import {DisplayArtComponent} from './Art/art-display.component';
import {ArtAddComponent} from './Art/art-add.component'; 
import {MaterialAddComponent} from './Art/material-add.component';
import {ArtPreviewComponent} from './Art/art-preview.component';

//Material Components
import {DisplayMaterialComponent} from './MaterialList/display-material.component';

//Controls
import {Art} from './Controls/Art';

//Services
import {ArtManagerService} from './Services/art-manager.service';
import {MaterialManagerService} from './Services/material-manager.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayArtComponent,
    ArtAddComponent,
    MaterialAddComponent,
    ArtPreviewComponent,
    DisplayMaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ArtManagerService, MaterialManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
