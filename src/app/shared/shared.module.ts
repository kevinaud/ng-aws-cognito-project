import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from './forms/forms.module';
import { SharedMaterialModule } from './shared-material.module';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageBodyComponent } from './page-body/page-body.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PageTitleComponent,
        PageBodyComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule,
        PageTitleComponent,
        PageBodyComponent
    ]
})
export class SharedModule {
}
