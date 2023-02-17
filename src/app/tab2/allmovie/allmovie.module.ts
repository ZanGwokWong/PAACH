import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllmoviePageRoutingModule } from './allmovie-routing.module';

import { AllmoviePage } from './allmovie.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllmoviePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [AllmoviePage]
})
export class AllmoviePageModule {}
