import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdProgressSpinnerModule,
  MdRadioModule, MdSelectModule
} from "@angular/material";

@NgModule({
  exports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdProgressSpinnerModule
  ]
})
export class FormsMaterialModule { }
