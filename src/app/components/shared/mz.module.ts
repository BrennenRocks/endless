import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MzButtonModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzIconMdiModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzToastModule } from 'ngx-materialize';

@NgModule({
  imports: [
    MzButtonModule,
    MzCardModule,
    MzIconMdiModule,
    MzParallaxModule
  ],
  exports: [
    CommonModule,
    MzButtonModule,
    MzCardModule,
    MzIconMdiModule,
    MzParallaxModule,
    MzToastModule
  ]
})
export class MzModule {

}