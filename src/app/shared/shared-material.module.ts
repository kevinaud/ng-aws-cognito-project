import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MdButtonModule, 
    MdCardModule, 
    MdIconModule,
    MdListModule
} from '@angular/material';


@NgModule({
    exports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdListModule
    ]
})
export class SharedMaterialModule {
}
