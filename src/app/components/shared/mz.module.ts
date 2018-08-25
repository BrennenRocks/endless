import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MzButtonModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzIconMdiModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzSpinnerModule } from 'ngx-materialize';
import { MzToastModule } from 'ngx-materialize';

@NgModule({
  imports: [
    MzButtonModule,
    MzCardModule,
    MzIconMdiModule,
    MzParallaxModule,
    MzSpinnerModule
  ],
  exports: [
    CommonModule,
    MzButtonModule,
    MzCardModule,
    MzIconMdiModule,
    MzParallaxModule,
    MzSpinnerModule,
    MzToastModule
  ]
})
export class MzModule {

}