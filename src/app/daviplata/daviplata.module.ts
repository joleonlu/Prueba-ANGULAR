import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from  './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { DaviplataRoutingModule } from './daviplata-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations:[
        AddComponent,
        HomeComponent,
        ListComponent,
        SearchComponent
    ],
    

    imports: [
        
            CommonModule,
            FlexLayoutModule,
            MaterialModule,
            DaviplataRoutingModule



    ]
})

export class daviplataModule {}
