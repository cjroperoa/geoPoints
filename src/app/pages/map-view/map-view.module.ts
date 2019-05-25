import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapViewPage } from './map-view.page';

import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: MapViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot()
  ],
  declarations: [MapViewPage]
})
export class MapViewPageModule {}
