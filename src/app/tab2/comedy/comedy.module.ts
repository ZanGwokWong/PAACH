import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComedyPageRoutingModule } from './comedy-routing.module';

import { ComedyPage } from './comedy.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComedyPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ComedyPage]
})
export class ComedyPageModule {}
