import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchboxPage } from './searchbox.page';

const routes: Routes = [
  {
    path: '',
    component: SearchboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchboxPageRoutingModule {}
