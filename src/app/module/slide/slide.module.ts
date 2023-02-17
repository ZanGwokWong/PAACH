import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/module/header/header.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[HeaderComponent]
})
export class SlideModule { }
