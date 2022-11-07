import { NgModule } from "@angular/core";

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule(
    {
        exports:[
            MatDialogModule,
            MatCardModule,
            MatInputModule,
            MatAutocompleteModule,
            MatFormFieldModule,
            MatListModule,
            MatIconModule,
            MatSidenavModule,
            MatToolbarModule,
            MatButtonModule
            

        ]
    }
)

export class MaterialModule {}