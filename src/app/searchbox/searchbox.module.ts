import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchboxPageRoutingModule } from './searchbox-routing.module';

import { SearchboxPage } from './searchbox.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchboxPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SearchboxPage]
})
export class SearchboxPageModule {}
