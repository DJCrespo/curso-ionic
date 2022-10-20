import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'ionic',
        loadChildren: () => import('../ionic/ionic.module').then(m => m.IonicPageModule)
      },
      {
        path: 'instructor',
        loadChildren: () => import('../instructor/instructor.module').then(m => m.InstructorPageModule)
      },
      {
        path: 'bienvenida',
        loadChildren: () => import('../bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/bienvenida',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/bienvenida',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
