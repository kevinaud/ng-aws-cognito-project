import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdInputModule
} from '@angular/material';


@NgModule({
    exports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule
    ]
})
export class SharedMaterialModule {
}
