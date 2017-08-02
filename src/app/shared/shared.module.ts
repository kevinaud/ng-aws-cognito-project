import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from './forms/forms.module';
import { SharedMaterialModule } from './shared-material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule
    ]
})
export class SharedModule {
}
