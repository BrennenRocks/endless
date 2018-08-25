import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MzButtonModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzCollectionModule } from 'ngx-materialize';
import { MzIconMdiModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';

@NgModule({
  imports: [
    MzButtonModule,
    MzCardModule,
    MzCollectionModule,
    MzIconMdiModule,
    MzParallaxModule
  ],
  exports: [
    CommonModule,
    MzButtonModule,
    MzCardModule,
    MzCollectionModule,
    MzIconMdiModule,
    MzParallaxModule
  ]
})
export class MzModule {

}