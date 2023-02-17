import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tab2Page } from './tab2.page';
const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children:[
      {
        path: 'allmovie',
        loadChildren: () => import('./allmovie/allmovie.module').then( m => m.AllmoviePageModule)
      },
      {
        path: 'science',
        loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
      },
      {
        path: 'horror',
        loadChildren: () => import('./horror/horror.module').then( m => m.HorrorPageModule)
      },
      {
        path: 'comedy',
        loadChildren: () => import('./comedy/comedy.module').then( m => m.ComedyPageModule)
      },
      {
        path:'',
        redirectTo: 'allmovie',
        pathMatch: 'full',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
