import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdIconModule } from '@angular/material';


@NgModule({
    exports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule
    ]
})
export class SharedMaterialModule {
}
