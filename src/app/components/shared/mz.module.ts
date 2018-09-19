import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MzButtonModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzDatepickerModule } from 'ngx-materialize'
import { MzIconMdiModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize'
import { MzParallaxModule } from 'ngx-materialize';
import { MzProgressModule } from 'ngx-materialize'
import { MzSpinnerModule } from 'ngx-materialize';
import { MzTextareaModule } from 'ngx-materialize'
import { MzToastModule } from 'ngx-materialize';
import { MzValidationModule } from 'ngx-materialize'

@NgModule({
  imports: [
    MzButtonModule,
    MzCardModule,
    MzDatepickerModule,
    MzIconMdiModule,
    MzInputModule,
    MzParallaxModule,
    MzProgressModule,
    MzSpinnerModule,
    MzTextareaModule,
    MzValidationModule
  ],
  exports: [
    CommonModule,
    MzButtonModule,
    MzCardModule,
    MzDatepickerModule,
    MzIconMdiModule,
    MzInputModule,
    MzParallaxModule,
    MzProgressModule,
    MzSpinnerModule,
    MzTextareaModule,
    MzToastModule,
    MzValidationModule
  ]
})
export class MzModule {

}